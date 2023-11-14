import React, { useState } from "react";
import Logo from '../asset/logo.png'

const Header = () => {
    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    };

    return (
        <div className={`navigation_bar ${isNavOpen ? "open" : ""}`}>
            <div className="logo">
                <img src={Logo} alt="nocodeapi_forever" />
                <h3>NoCodeAPI</h3>
            </div>
            <div className={`nav-links ${isNavOpen ? "open" : ""}`}>
                <ul>
                    <li>Marketplace</li>
                    <li>Workflows</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>NoCode Affiliate</li>
                </ul>
            </div>
            <div className={`buttons ${isNavOpen ? "open" : ""}`}>
                <button className="btn">Try For Free</button>
                <button className="btn">Login</button>
            </div>
            <div className="nav-toggle" onClick={toggleNav}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};

export default Header;
