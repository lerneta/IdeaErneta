import React from 'react';
import './NavBar.css';
import CartWdiget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <div class="navbar-area">
                <div class="container">
                    <nav class="site-navbar">
                        <a href="" class="site-logo">Tripi Grow</a>
                        <ul>
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/categorias/1">Productos</Link></li>
                            <li><Link to="/cart/"><CartWdiget /></Link></li>
                        </ul>
                        <button class="nav-toggler">
                            <span></span>
                        </button>
                    </nav>
                </div>
            </div>

        </div>
    )
}

export default NavBar
