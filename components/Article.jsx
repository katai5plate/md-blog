import Markdown from 'react-markdown';
import CodeBlock from "./CodeBlock";
import { PageHeader } from 'react-bootstrap';

export default props => (
  <article>
    <PageHeader>
      {props.title}<small> {props.date}</small>
    </PageHeader>
    <Markdown
      source={props.content}
      renderers={{
        code: CodeBlock
      }}
    />
  </article>
);