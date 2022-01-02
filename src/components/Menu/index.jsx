import { NavLink } from "react-router-dom";
import { getAlgorithms } from "../../data";
import "./index.css";
const Menu = () => {
    const algorithms = getAlgorithms();
    return (
    <div className="menu">
        <h3 className="menu__header">Algorytmy</h3>
        <div className="menu__links">
        {algorithms.map( algorithm => (
            <NavLink 
                className={({isActive}) => isActive ? 'menu__link--active menu__link' : 'menu__link'}
                to={algorithm.to} 
                key={algorithm.to}
            >
                <span>{algorithm.name}</span>
            </NavLink>
        ))}
        </div>
    </div>);
}
export default Menu;