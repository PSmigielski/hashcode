import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "./index.css";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default App;