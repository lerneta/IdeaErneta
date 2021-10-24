import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div>
            <div class="navbar-area">
            <div class="container">
            <nav class="site-navbar">
        <a href="#home" class="site-logo">Tripi Grow</a>
        <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Sobre Nosotros</a></li>
            <li><a href="#">Contacto</a></li>
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
