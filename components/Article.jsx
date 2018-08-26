import Markdown from 'react-markdown';
import CodeBlock from "./CodeBlock";
import Image from "./Image";
import { PageHeader, Panel } from 'react-bootstrap';

export default props => (
  <Panel>
    <Panel.Heading>
      <h1>{props.title}</h1>
      <p>{props.date}</p>
    </Panel.Heading>
    <Panel.Body>
      <Markdown
        source={props.content}
        renderers={{
          code: CodeBlock,
          image: Image
        }}
      />
    </Panel.Body>
  </Panel>
);