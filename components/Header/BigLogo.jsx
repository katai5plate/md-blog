import {
  Jumbotron
} from 'react-bootstrap';

export default () => (
  <div>
    <Jumbotron style={{
      backgroundImage: "url('/static/image/logo.png')",
      backgroundSize: "cover",
      backgroundRepeat: false,
      color: "#FFF",
    }} >
      <h1>Had2Apps</h1>
      <h2>自作ゲームと素材のサイト</h2>
    </Jumbotron>
  </div>
)