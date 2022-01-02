import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import "./index.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Menu />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;