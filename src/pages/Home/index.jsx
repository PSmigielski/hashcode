import { Link } from "react-router-dom";
import ContentList from "../../components/ContentList";
import "./index.css";
const Home = () => {
    return (
        <div className="home">
            <div className="home__content">
                <h1 className="home__header">Hashcode</h1>
                <p>Jest to strona pozwalająca, tym co zdają maturę z informatyki, opanować podstawowe algorytmy jakie są na nie wymagane. Poznasz tu takie algorytmy jak:</p>
                <ContentList data={["Schemat hornera", "Zamiana systemów liczbowych", "Potęgowania", "Największy wspólny dzielnik", "I wiele innych"]}/>
                <p>Na bierząco będą tutaj dodawane nowe algorytmy zgodne z wymaganiami CKE</p>
                <Link to="/algorithms/basic-info"><button className="home__button">Zacznij swoją naukę!</button></Link>
            </div>
        </div>
    )
}
export default Home;