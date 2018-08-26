const fs = require("fs-extra");
const path = require("path");

const __markdownDir = "markdown";

const __markdownCategories = [
  "fixed",
  "article",
];

(async () => {
  let output = [];
  for (let category of __markdownCategories) {
    const dpath = `${__markdownDir}/${category}`
    const flist = await fs.readdir(dpath);
    for (let file of flist) {
      const fpath = `${dpath}/${file}`;
      const fstat = await fs.statSync(fpath);
      if (fstat.isFile()) {
        const name = `${category}/${file}`;
        const pname = path.parse(name);
        const data = await fs.readFile(fpath, { encoding: 'utf8' });
        const content = data.replace(data.match(/---[\s\S]*?---[\n|\r\n]/)[0], "");
        const metadata = data.match(/---[\n|\r\n]([\s\S]*?)[\n|\r\n]---/)[1];
        const meta = metadata.split(/[\n|\r\n]/).reduce((p, c) => {
          const d = c.split(": ");
          return { ...p, ...{ [d[0]]: d[1] } };
        }, [])
        console.log(`ADD ${name}`);
        output = [...output, {
          name: pname.name,
          metaName: name,
          dirName: pname.dir,
          content,
          meta,
        }]
      }
    }
  }
  await fs.writeFile(`${__markdownDir}/markdown.json`, JSON.stringify(output, null, "  "));
})()