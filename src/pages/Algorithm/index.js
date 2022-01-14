import "./index.css";

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import CodeSnippet from "../../components/CodeSnippet";
import CodeSnippets from "../../components/CodeSnippets";
import ContentList from "../../components/ContentList";
import Loader from "../../components/Loader";
import {UIContext} from "../../context/UIContext";
import { getPages } from "../../data";

const Algorithm = () => {
    let navigate = useNavigate();
    const params = useParams();
    const uiContext = useContext(UIContext);
    const [page, setPage] = useState({name: null, to: null, data:[]});
    useEffect(()=>{
        uiContext.setIsLoading(true);
        const pages = getPages();
        const data = pages.find(element => element.to === params.algoId);
        if(data === undefined){
            navigate("/404");
        }
        setPage(data);
        uiContext.setIsLoading(false);
    },[params, navigate,uiContext]);
    return(
        <div className="algorithm">
            <div className="algorithm__content">
                {uiContext.isLoading ? <Loader/> : (page.data.map((page, index) => (
                    <div key={index}>
                        { page.header ? <h1 className="algorithm__header">{page.header}</h1> : ""}
                        { page.text ? <p className="algorithm__text">{page.text}</p>:""}
                        { page.list ? <ContentList data={page.list}/> : ""}
                        { page.snippets ? ( typeof page.snippets !== "string" ? 
                        <CodeSnippets codeSnippets={page.snippets} /> :
                        <CodeSnippet className="language-cpp">{page.snippets}</CodeSnippet> ) : ""}
                    </div>
                )))}
            </div>
        </div> 
    );
}

export default Algorithm;