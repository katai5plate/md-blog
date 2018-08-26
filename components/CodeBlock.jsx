export default props => {
  const { language, value } = props;
  switch (language) {
    case "dangerouslysetinnerhtml": {
      return (
        <div dangerouslySetInnerHTML={{ __html: value }} />
      )
    };
    default: {
      return (
        <pre className={`prettyprint linenums lang-${language}`}>
          <code>
            {value}
          </code>
        </pre>
      )
    };
  }
}