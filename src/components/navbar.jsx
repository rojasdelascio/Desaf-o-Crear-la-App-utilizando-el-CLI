import './navbar.css';
import React, { Component } from 'react';
import indieargpng from '../assets/INDIEARG.png'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
//import 'Styles/App.scss';
//OJO con lo de abajo

function Navbar() {

    return (
        <header>


            <nav className="navbar navbar-expand-lg bg-light">

                <div className="container-fluid">

                    <a className="navbar-brand" href="#"><img className="img-thumbnail" src={indieargpng} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="./index.jsx">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="http://independiente-arg.com/pages/sobre-nosotros.html">Sobre Nosotros</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secciones
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="http://independiente-arg.com/secciones/cine.html">Cortometrajes</a></li>
                                    <li><a className="dropdown-item" href="http://independiente-arg.com/secciones/literatura.html">Cuentos Cortos</a></li>
                                    <li><a className="dropdown-item" href="#">Guiones</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>

        </header>

    )
}


export default Navbar;