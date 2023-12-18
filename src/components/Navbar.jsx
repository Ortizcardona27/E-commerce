import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const Navbar = () => {
    return (
        <nav className="navbar">
          <Link to="/" className="logo"><h1>E-COMMERCE</h1></Link>
          <ul className="menu">
            <li><Link className="menu-Link" to="/">Inicio</Link></li>
            <li><Link className="menu-Link" to="/productos">Productos</Link></li>
            <li><Link className="menu-Link" to="/productos/medias">Medias</Link></li>
            <li><Link className="menu-Link" to="/productos/pantalones">Pantalones</Link></li>
            <li><Link className="menu-Link" to="/productos/remeras">Remeras</Link></li>
            <li><Link className="menu-Link" to="/productos/buzos">Buzos</Link></li>
            <li><Link className="menu-Link" to="/nosotros">Nosotros</Link></li>
            <li><Link className="menu-Link" to="/contacto">Contacto</Link></li>
            <li><CartWidget/></li>

          </ul>
        </nav>
    )
};

export default Navbar;