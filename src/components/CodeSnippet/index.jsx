import "./index.css";
import hljs from "highlight.js";
import { useEffect, useRef } from "react";
const CodeSnippet = ({children, className}) => {
    const codeRef = useRef(null);
    useEffect(()=>{
        const nodes = codeRef.current.querySelectorAll('pre code');
        nodes.forEach(node => hljs.highlightElement(node));
    });
    return <pre ref={codeRef}><code className={className}>{children}</code></pre>;
};

export default CodeSnippet