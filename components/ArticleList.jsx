import React from 'react';
import Markdown from 'react-markdown';
import articles from "../markdown/markdown.json";
import CodeBlock from "./CodeBlock";

export default () => (
  <div>
    <nav style={{
      color: "white",
      backgroundColor: "cyan"
    }}>
      <h1>
        <a href="https://github.com/katai5plate/md-blog">
          GitHub: katai5plate/ md-blog
            </a>
      </h1>
    </nav>
    {
      articles.reduce((p, c) => {
        return [...p, (
          <div key={c.name}>
            <p style={{
              backgroundColor: "yellow"
            }}>{c.name}</p>
            <Markdown
              source={c.content}
              renderers={{
                code: CodeBlock
              }}
            />
          </div>
        )];
      }, [])
    }
  </div>
);