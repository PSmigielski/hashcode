/* eslint-disable react/prop-types */
import "./index.css";

import hljs from "highlight.js";
import React, { useEffect, useRef } from "react";

const CodeSnippet = ({tabIndex,snippetKey,children, className}) => {
    const invisible = {
        display: "none",
        margin: "0px"
    }
    const visible = {
        display: "block",
        margin: "0px",
        borderRadius: "0px 0px 20px 20px",
    }
    const setStyle = () => {
        if(Number.isInteger(tabIndex) && Number.isInteger(snippetKey)){
            if(tabIndex === snippetKey){
                return visible;
            } else{
                return invisible;
            } 
        }else return {
            margin: "15px 0px 15px 0px",
            borderRadius: "20px"
        }
    }
    const codeRef = useRef(null);
    hljs.configure({
        ignoreUnescapedHTML: true
    })
    useEffect(()=>{
        const nodes = codeRef.current.querySelectorAll('pre code');
        nodes.forEach(node => hljs.highlightElement(node));
    });
    return <pre className="codesnippet" style={setStyle()} ref={codeRef}><code className={className}>{children}</code></pre>;
};

export default CodeSnippet;