import "./index.css";
import { useState } from "react";
import CodeSnippet from "../CodeSnippet";

const CodeSnippets = ({ codeSnippets }) => {
    const [tabIndex, setTabIndex] = useState(0);
    return (
        <div className="codesnippets">
            <div className="codesnippets__tabs">
                {codeSnippets.map((el,index) => (
                    <button className={index === tabIndex ? "codesnippets__tab codesnippets__tab--active" : "codesnippets__tab"} key={index} onClick={()=>setTabIndex(index)}>{el.lang}</button>
                ))}
            </div>
            <div className="codesnippets__snippets" >
                {codeSnippets.map((codeSnippet,index) => (
                    <CodeSnippet tabIndex={tabIndex} snippetKey={index} key={index} className={`language-${codeSnippet.lang}`}>{codeSnippet.code}</CodeSnippet>
                ))} 
            </div>
        </div>
    );
}
export default CodeSnippets;