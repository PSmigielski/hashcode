import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeSnippet from "../../components/CodeSnippet";
import CodeSnippets from "../../components/CodeSnippets";
import { getAlgorithms } from "../../data";
import "./index.css";

const Algorithm = () => {
    let navigate = useNavigate();
    const params = useParams();
    const [algorithm, setAlgorithm] = useState({name: null, to: null, data:[]});
    useEffect(()=>{
        const algorithms = getAlgorithms();
        const data = algorithms.find(element => element.to === params.algoId);
        if(data === undefined){
            navigate("/404");
        }
        setAlgorithm(data);
    },[params, navigate]);
    return(
        <div className="algorithm">
            <div className="algorithm__content">
                {algorithm.data.map((algo, index) => (
                    <div key={index}>
                        <h1 className="algorithm__header">{algo.header}</h1>
                        { algo.text ? <p className="algorithm__text">{algo.text}</p>:""}
                        {typeof algo.snippets !== "string" ? 
                        <CodeSnippets codeSnippets={algo.snippets} /> :
                        <CodeSnippet className="language-cpp">{algo.snippets}</CodeSnippet> }
                    </div>
                ))}
            </div>
        </div> 
    );
}

export default Algorithm;