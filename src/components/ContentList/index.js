/* eslint-disable react/prop-types */
import "./index.css";

import React from "react";

const ContentList = ({data}) => {
    return (
        <ul className="contentList">
            {data.map((el, index) => (<li key={index} className="contentList__element">{el}</li>))}
        </ul>
    )
}

export default ContentList;