import "./index.css";

const ContentList = ({data}) => {
    return (
        <ul className="contentList">
            {data.map((el) => (<li className="contentList__element">{el}</li>))}
        </ul>
    )
}

export default ContentList;