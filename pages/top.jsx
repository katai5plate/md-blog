
import Article from '../components/Article';
import data from '../data/markdown.json';
export default () => {
  const art = data.filter(v => v.metaName === "fixed/about.md")[0];
  return (
    <Article
      title={art.meta.title}
      date={art.meta.date}
      content={art.content}
    />
  )
}