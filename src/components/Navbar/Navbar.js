import React, { Component } from 'react';

import logo from '../../logo.svg';
import './navbar.scss';

import { NavLink } from 'react-router-dom';



class Navbar extends Component{
    render(){
        return (
            <React.Fragment>
                <nav className="navbar">
                    <img src={logo} alt="city tours"/>
                    <ul className="nav-links">
                        <li>
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li>
                            <NavLink exact to="/tours" className="nav-link">Tours</NavLink>
                        </li>
                    </ul>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;