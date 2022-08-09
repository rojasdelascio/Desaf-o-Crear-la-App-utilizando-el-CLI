import React from 'react';
import { useCart } from './Context/CartContext';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import './Cart.css'
import { getFirestore, addDoc, collection } from 'firebase/firestore';
import AddUsername from './Addusername';

function Cart() {


    const arrayCarrito = useCart("");
    const arrayCarritoLocal = arrayCarrito.cart;


    const noHayItems = () => {

        return (
            <div className="nohayitems"> < button type="button" className="btn btn-light" > No hay productos en tu carrito < Link to='/productos' > <button type="button" className="btn btn-link">Accede aquí para ver nuestros productos</button></Link ></button > </div>
        )
    }

    const siHayItems = () => {
        return (
            arrayCarritoLocal.map((x) => < CartItem className="itemscarrito" id={x.id} name={x.name} price={x.price} quantity={x.quantity} URL={x.link} />)
        )
    }

    const handleChange = event => {
        //se coloca para evitar el error de consola
    }

    return (
        <>
            <h2>Bienvenido al carrito</h2>
            <p>Observa abajo los items que has agregado hasta ahora</p>
            {/* {arrayCarritoLocal.map((x) => < CartItem className="items" id={x.id} name={x.name} price={x.price} quantity={x.quantity} URL={x.link} />)} */}
            <div className="div-itemscarrito">
                {arrayCarrito.cart.length > 0 ? siHayItems() : noHayItems()}
            </div>
            {arrayCarrito.cart.length > 0 ? <AddUsername /> : <></>}
            {arrayCarrito.cart.length > 0 ? <div className="preciototal-y-limpiarcarrito"><div id="div-inputtotal" className="input-group input-group-lg"><span className="input-group-text" id="preciototal-texto">Precio Total</span><input onChange={handleChange} id="preciototal-precio" type="number" className="input-group-text" value={arrayCarrito.getTotalPrice()} disabled /></div><button onClick={() => { arrayCarrito.clear() }} type="button" className="btn btn-danger" id="limpiarcarrito">Limpiar Carrito</button></div> : <></>}

        </>

    )

}

export default Cart;