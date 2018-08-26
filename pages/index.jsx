import { Grid, Row, Col } from 'react-bootstrap';

import Meta from '../components/Meta';
import Header from '../components/Header';
import ArticleList from '../components/ArticleList';

export default () => (
  <div>
    <Meta />
    <Grid>
      <Header />
      <ArticleList />
    </Grid>
  </div>
)