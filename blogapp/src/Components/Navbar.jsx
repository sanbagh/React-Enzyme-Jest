import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
class Navbar extends Component {
    state = {}
    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
                <NavLink className="navbar-brand" to="/">BlogApp</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>

                    </ul>
                </div>
            </nav>);
    }
}

export default Navbar;