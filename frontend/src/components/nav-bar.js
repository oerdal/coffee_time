import React from 'react';

import logo from '../resources/logo.png';

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg p-0 mb-2 border-bottom border-dark">
            <a href="/" className="nav-element"><img src={logo} alt="logo" className="logo mx-auto d-block" /></a>
            <div className="p-2">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarControls" aria-controls="navbarControls" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon navbar-dark links"></span>
                </button>
            </div>
            <div className="navbar-collapse collapse" id="navbarControls">
                <div className="navbar-nav ml-auto">
                    <a href="/settings" className="nav-element py-2 px-3">Settings</a>
                    <a href="/orders" className="nav-element py-2 px-3">Orders</a>
                    <a href="/login" className="nav-element py-2 px-3">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;