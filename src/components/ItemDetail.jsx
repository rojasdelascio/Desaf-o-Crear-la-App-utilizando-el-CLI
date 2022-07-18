import ItemCount from "./ItemCount";
import React from 'react';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import './ItemDetail.css';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';

function ItemDetail(props) {
    const propsLocal = props;

    //duda:¿Que pasa si aca ponia const cart=useContext(CartContext) e importaba el contexto, ¿es lo mismo?
    //por que en otros ejemplos importan funcion por funcion tipo const {addToCart}=useContext(CartContext)?
    const carrito = useCart();


    const [contador, setContador] = useState(0);


    class itemNuevo {
        constructor(id, nombre, precio, disponible, cantidad) {
            this.id = id;
            this.name = nombre;
            this.price = precio;
            this.stock = disponible;
            this.quantity = cantidad;

        }
    }


    let imagen = `/${props.URL}`;


    const onAdd = (input) => {

        setContador(input);
        const itemPrueba = new itemNuevo(props.id, props.Nombre, props.Precio, props.Stock, input)

        carrito.addItem(itemPrueba, input);


    }



    return (

        <div className="container">
            <div className="col-lg-8 border p-3 main-section bg-white">
                <div className="row hedding m-0 pl-3 pt-0 pb-3">
                    <h2>Detalle del Producto</h2>
                </div>
                <div className="row m-0">
                    <div className="col-lg-4 left-side-product-box pb-3">
                        <img src={imagen} className="border p-3" />
                        <span className="sub-img">
                            {/* <img src="" className="border p-2" />
                            <img src="" className="border p-2" />
                            <img src="" className="border p-2" /> */}
                        </span>
                    </div>
                    <div className="col-lg-8">
                        <div className="right-side-pro-detail border p-3 m-0">
                            <div className="row">
                                <div className="col-lg-12">
                                    <span></span>
                                    <p className="m-0 p-0">
                                        {props.Nombre}
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <p className="m-0 p-0 price-pro">
                                        {props.Precio}$
                                    </p>
                                    <hr className="p-0 m-0" />
                                </div>
                                <div className="col-lg-12 pt-2">
                                    <h5>Detalles del producto</h5>
                                    <span>
                                        {props.Descripcion}
                                    </span>
                                    <hr className="m-0 pt-2 mt-2" />
                                </div>
                                <div className="col-lg-12">
                                    <p className="tag-section"><strong>Tipo : </strong>
                                        <a href="">
                                            {props.Tipo}
                                        </a>
                                    </p>
                                </div>
                                <div className="col-lg-12">
                                    <h6>Stock :</h6>
                                    <input type="number" className="form-control text-center w-100" value={props.Stock} />
                                    {/* <!-- el value deberia ser props.Stock --> */}
                                </div>
                                <div className="col-lg-12 mt-3">
                                    {/* Tengo que arreglar que abajo aparezca un error si se inteta añadir mas que el stock de acuerdo a la sumatoria de CartContext */}
                                    {contador === 0 ? <ItemCount onAdd={onAdd} stock={props.Stock} nombre={props.Nombre} /> : <Link className="btn btn-success" to='/cart'><h6>Añadiste {contador} Items,</h6> <h2>¡Ir al carrito!</h2></Link>}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- <div className="row">
                                        <div className="col-lg-12 text-center pt-3">
                                            <h4>More Product</h4>
                                        </div>
                                    </div>
                                    <div className="row mt-3 p-0 text-center pro-box-section">
                                        <div className="col-lg-3 pb-2">
                                            <div className="pro-box border p-0 m-0">
                                                <img src="">
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-2">
                                            <div className="pro-box border p-0 m-0">
                                                <img src="">
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-2">
                                            <div className="pro-box border p-0 m-0">
                                                <img src="">
                                            </div>
                                        </div>
                                        <div className="col-lg-3 pb-2">
                                            <div className="pro-box border p-0 m-0">
                                                <img src="">
                                            </div>
                                        </div>
                                    </div> --> */}
        </div>


    );

}

export default ItemDetail;