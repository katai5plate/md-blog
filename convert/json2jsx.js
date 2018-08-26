const fs = require("fs-extra");

const __inFile = "data/markdown.json";
const __outDir = "pages/blog";

(async () => {
  const data = await fs.readJson(__inFile);
  for (let item of data) {
    const fname = item.metaName.replace(/\.md/g, "");
    const slash = fname.split(/[\/|\\]/).length - 1;
    const pref = '../'.repeat(slash) + '../../'
    const src = `
import Common from '${pref}pages/common';
import Article from '${pref}components/Article';
import data from '${pref}data/markdown.json';
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
    const outfname = `${__outDir}/${fname}.jsx`;
    await fs.outputFile(outfname, src);
    console.log(`GENERATED ${outfname}`)
  }
})()

