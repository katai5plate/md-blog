import React from 'react';
import Markdown from 'react-markdown';
import articles from "../markdown/markdown.json";
export default () => (
    <div>
        <Markdown source={articles[0].content} />
    </div>
)