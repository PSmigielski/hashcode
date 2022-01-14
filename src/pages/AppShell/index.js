import "./index.css";

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Navbar from "../../components/Navbar";
import { UIContext } from "../../context/UIContext";

const AppShell = () => {
    const uiContext = useContext(UIContext);
    return (
        <div className="app">
            <Navbar />
            <div className="app__body">
                <div className={ uiContext.isMenuOpen ? "app__menu app__menu--open app__menu--hasFade" : "app__menu app__menu--closed app__menu--hasFade"}>
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

export default AppShell;