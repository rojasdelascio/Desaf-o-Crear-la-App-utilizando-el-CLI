import './navbar.css';
import React, { Component } from 'react';
import indieargpng from '../assets/INDIEARG.png'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';
import CartWidget from './CartWidget';
import { Route, Routes, Link } from 'react-router-dom';
import ItemListContainer from './ItemListContainer';
import ItemDetailContainer from './ItemDetailContainer';
//import 'Styles/App.scss';
//OJO con lo de abajo

function Navbar() {

    return (
        <header class="header">


            <nav className="navbar navbar-expand-lg bg-light">

                <div className="container-fluid">

                    <Link to="/" className="navbar-brand" ><img className="img-thumbnail" src={indieargpng} /></Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>



                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/productos" className="nav-link" >Productos</Link>
                            </li>


                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secciones
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><Link to="/categoria/cortometraje" className="dropdown-item" >Cortometrajes</Link></li>
                                    <li><Link to="/categoria/Serie" className="dropdown-item">Series</Link></li>
                                    <li><Link to="/categoria/Album" className="dropdown-item" >Musica</Link></li>
                                    <li><Link to="/categoria/Libro" className="dropdown-item" >Literatura </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <CartWidget />
            </nav>

        </header >

    )
}


export default Navbar;