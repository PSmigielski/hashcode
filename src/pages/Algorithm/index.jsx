import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CodeSnippet from "../../components/CodeSnippet";
import { getAlgorithms } from "../../data";
import "./index.css";

const Algorithm = () => {
    let navigate = useNavigate();
    const params = useParams();
    const algorithms = getAlgorithms();
    const [algorithm, setAlgorithm] = useState({});
    useEffect(()=>{
        const data = algorithms.find(element => element.to === params.algoId);
        if(data === undefined){
            navigate("/404");
        }
        setAlgorithm(data);
    },[params, navigate, algorithms]);
    return(
        <div className="algorithm">
            <div className="algorithm__content">
                <h1>{algorithm.name}</h1>
                <CodeSnippet className="language-cpp">{algorithm.code}</CodeSnippet>
            </div>
        </div> 
    );
}

export default Algorithm;