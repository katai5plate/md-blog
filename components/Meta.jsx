import React from 'react';
import Helmet from 'react-helmet';

export default class Meta extends React.Component {
  render() {
    return (
      <Helmet
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