import React from 'react';

import logo from '../resources/cuplogo.png';

const NavBar = () => {
    return (
        <nav className="navbar sticky-top navbar-expand-lg p-0">
            <div className="p-2">
                <button className="navbar-toggler p-1 btn border border-danger" type="button" data-toggle="collapse" data-target="#navbarControls" aria-controls="navbarControls" aria-expanded="false" aria-label="Toggle navigation">
                    <img src={logo} alt="menu" />
                </button>
            </div>
            <div className="navbar-collapse collapse" id="navbarControls">
                <div className="navbar-nav mx-auto">
                    <a href="/" className="nav-link text-danger p-3">Home</a>
                    <a href="/about" className="nav-link text-danger p-3">About</a>
                    <a href="/orders" className="nav-link text-danger p-3">Orders</a>
                    <a href="/login" className="nav-link text-danger p-3">Login</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;