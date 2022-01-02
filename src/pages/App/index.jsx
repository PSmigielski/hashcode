import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import "./index.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="app__body">
                <div class="app__menu">
                    <Menu />
                </div>
                <div className="app__content">
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App;