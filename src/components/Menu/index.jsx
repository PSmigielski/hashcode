import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { getPages } from "../../data";
import { UIContext } from "../../context/UIContext";
import "./index.css";
const Menu = () => {
    const pages= getPages();
    const uiContext = useContext(UIContext);
    return (
    <div className="menu">
        <h3 className="menu__header">Algorytmy</h3>
        <div className="menu__links">
        {pages.map( algorithm => (
            <NavLink 
                className={({isActive}) => isActive ? 'menu__link--active menu__link' : 'menu__link'}
                to={`algorithms/${algorithm.to}`} 
                key={algorithm.to}
                onClick={() => uiContext.setIsMenuOpen(false)}
            >
                <span>{algorithm.name}</span>
            </NavLink>
        ))}
        </div>
    </div>);
}
export default Menu;