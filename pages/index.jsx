import React from 'react';
import Markdown from 'react-markdown';
import articles from "../markdown/markdown.json";
export default () => (
    <div>
        <nav style={{
            color: "white",
            backgroundColor: "cyan"
        }}>
            <h1><a href="https://github.com/katai5plate/md-blog">GitHub Page</a></h1>
        </nav>
        <Markdown source={articles[0].content} />
    </div>
)