const fs = require("fs-extra");

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
                const content = await fs.readFile(fpath, { encoding: 'utf8' });
                console.log(`ADD ${name}`);
                output = [...output, {
                    name,
                    content
                }]
            }
        }
    }
    await fs.writeFile(`${__markdownDir}/markdown.json`, JSON.stringify(output, null, "  "));
})()