import React from 'react';
import Helmet from 'react-helmet';

export default class Meta extends React.Component {
  render() {
    const titleBar = "My Branding Page Prototype";
    const ogType = {
      website: "website",
      blog: "blog",
      article: "article",
    }
    return (
      <Helmet
        title={titleBar}
        meta={[
          { property: "og:title", content: titleBar },
          { property: "og:type", content: ogType.website },
          { property: "og:url", content: "https://md-blog-experiments.netlify.com" },
          { property: "og:image", content: "static/image/logo.png" },
        ]}
        link={[
          // Bootstrap
          {
            rel: 'stylesheet',
            href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
          },
        ]}
        // google-code-prettify
        script={[
          {
            src: 'https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js'
          },
        ]}
      />
    )
  }
}