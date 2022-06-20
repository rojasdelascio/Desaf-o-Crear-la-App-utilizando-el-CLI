import './elemento.css';
import React, { Component } from 'react';
import Pravus from '../assets/Pravus.png';
import comandante from '../assets/comandante.png';
import apocalipsis from '../assets/apocalipsis.png';


function Elemento(propsElemento) {
    return (

        <div>
            <div className="container" id="recomendados">
                <div className="row">
                    <div className="col-sm"><img src={propsElemento.imagen} /></div>
                    <div className="col-sm"><h5>{propsElemento.titulo}</h5></div>
                    <div className="col-sm"><p>{propsElemento.tipo}</p></div>
                    <div className="col-sm"><p>{propsElemento.descripcion}</p></div>
                    <div className="col-sm"><p>{propsElemento.precio}$</p></div>
                    <div className="col-sm"> <button class="btn btn-primary" type="submit">Comprar</button></div>
                </div>
            </div>
        </div>
    );
}


export default Elemento;