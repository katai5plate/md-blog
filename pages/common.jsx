import { Grid, Row, Col } from 'react-bootstrap';

import Meta from '../components/Meta';
import Header from '../components/Header';

import "../style.css";

export default props => (
  <div>
    <Meta />
    <Grid>
      <Header />
      {props.children}
    </Grid>
  </div>
)