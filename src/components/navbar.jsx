// import './Styles/navbar.scss'
import React, { Component } from 'react';
import indieargpng from '../assets/INDIEARG.png'
// import { Navbar, Jumbotron, Button } from 'react-bootstrap';

//import 'Styles/App.scss';
//OJO con lo de abajo

function Navbar() {

    return (
        <header>


            <nav class="navbar navbar-expand-lg bg-light">

                <div class="container-fluid">

                    <a class="navbar-brand" href="#"><img class="img-thumbnail" src={indieargpng} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Sobre Nosotros</a>
                            </li>

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Secciones
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a class="dropdown-item" href="#">Cine</a></li>
                                    <li><a class="dropdown-item" href="#">Literatura</a></li>
                                    <li><a class="dropdown-item" href="#">Musica</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>




        </header>




    )



}


export default Navbar;