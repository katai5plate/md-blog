const fs = require("fs-extra");

const __inFile = "markdown/markdown.json";
const __outDir = "pages/articles";


(async () => {
  const data = await fs.readJson(__inFile);
  for (let item of data) {
    const fname = item.metaName.replace(/\.md/g, "");
    const slash = fname.split(/[\/|\\]/).length - 1;
    const pref = '../'.repeat(slash) + '../../'
    const src =
      `import Common from '${pref}pages/common';
import Article from '${pref}components/Article';
import data from '${pref}markdown/markdown.json';
export default () => {
  const art = data.filter(v => v.metaName === "${item.metaName}")[0];
  return (
    <Common>
      <Article
        title={art.meta.title}
        date={art.meta.date}
        content={art.content}
      />
    </Common>
  )
}`;
    console.log(fname)
    await fs.outputFile(`${__outDir}/${fname}.jsx`, src);
  }
})()

