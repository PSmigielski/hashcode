import { Link } from "react-router-dom";
import Burger from "../Burger";
import "./index.css";
const Navbar = () => {
    
    return (
        <nav className="navbar">
            <div className="navbar__content">
                <Burger />
                <Link to="/"><h1 className="navbar__logo">Hashcode</h1></Link>
            </div>
        </nav>
    );
}

export default Navbar;