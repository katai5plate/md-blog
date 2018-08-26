export default props => (
    <pre className={`prettyprint linenums lang-${props.language}`}>
        <code>
            {props.value}
        </code>
    </pre>
)