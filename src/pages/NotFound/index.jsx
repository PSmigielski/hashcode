import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => {
    return (
        <div className="NotFound">
            <h1 className="NotFound__header">404</h1>
            <p className="NotFound__errorName">Not Found</p>
            <Link className="NotFound__Link" to="/"><button className="NotFound__button">Wróć na stronę główną</button></Link>
        </div>
    )
}

export default NotFound;
