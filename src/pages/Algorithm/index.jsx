import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeSnippet from "../../components/CodeSnippet";
import CodeSnippets from "../../components/CodeSnippets";
import Loader from "../../components/Loader";
import { getAlgorithms } from "../../data";
import {UIContext} from "../../context/UIContext";
import "./index.css";

const Algorithm = () => {
    let navigate = useNavigate();
    const params = useParams();
    const uiContext = useContext(UIContext);
    const [algorithm, setAlgorithm] = useState({name: null, to: null, data:[]});
    useEffect(()=>{
        uiContext.setIsLoading(true);
        const algorithms = getAlgorithms();
        const data = algorithms.find(element => element.to === params.algoId);
        if(data === undefined){
            navigate("/404");
        }
        setAlgorithm(data);
        uiContext.setIsLoading(false);
    },[params, navigate,uiContext]);
    return(
        <div className="algorithm">
            <div className="algorithm__content">
                {uiContext.isLoading ? <Loader/> : (algorithm.data.map((algo, index) => (
                    <div key={index}>
                        <h1 className="algorithm__header">{algo.header}</h1>
                        { algo.text ? <p className="algorithm__text">{algo.text}</p>:""}
                        {typeof algo.snippets !== "string" ? 
                        <CodeSnippets codeSnippets={algo.snippets} /> :
                        <CodeSnippet className="language-cpp">{algo.snippets}</CodeSnippet> }
                    </div>
                )))}
            </div>
        </div> 
    );
}

export default Algorithm;