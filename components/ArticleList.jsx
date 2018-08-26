import React from 'react';
import articles from "../markdown/markdown.json";
import Article from "./Article"

export default () => (
  <div>
    {
      articles.reduce((p, c) => {
        return [...p, (
          <div key={c.name}>
            <Article
              title={c.meta.title}
              date={c.meta.date}
              content={c.content}
            />
          </div>
        )];
      }, [])
    }
  </div>
);