import "./index.css";

const ContentList = ({data}) => {
    return (
        <ul className="contentList">
            {data.map((el, index) => (<li key={index} className="contentList__element">{el}</li>))}
        </ul>
    )
}

export default ContentList;