import { useContext } from "react";
import { UIContext } from "../../context/UIContext";
import "./index.css"
const Burger = () => {
    const uiContext = useContext(UIContext);
    return (
        <button className={uiContext.isMenuOpen ? "hamburger hamburger--active" : "hamburger"} onClick={() => {uiContext.setIsMenuOpen(!uiContext.isMenuOpen)}}>
            <span class="hamburger__box">
                <span class="hamburger__inner"></span>
            </span>
        </button>
    );
}

export default Burger;