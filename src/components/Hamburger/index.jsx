import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import "./index.css"
const Hamburger = () => {
    const uiContext = useContext(UIContext);
    return (
        <button className={uiContext.isMenuOpen ? "hamburger hamburger--active" : "hamburger"} onClick={() => {uiContext.setIsMenuOpen(!uiContext.isMenuOpen)}}>
            <span className="hamburger__box">
                <span className="hamburger__inner"></span>
            </span>
        </button>
    );
}

export default Hamburger;