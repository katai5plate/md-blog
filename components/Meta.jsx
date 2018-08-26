import React from 'react';
import Helmet from 'react-helmet';

export default () => <Helmet
  link={[
    {
      rel: 'stylesheet',
      href: 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'
    }
  ]}
/>