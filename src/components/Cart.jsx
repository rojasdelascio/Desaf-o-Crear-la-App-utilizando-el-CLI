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
    const [cont, setCont] = useState(0);

    const arrayCarrito = useCart();
    console.log('DESDECART', arrayCarrito);

    const arrayCarritoLocal = arrayCarrito.cart;
    console.log('DESDECART', arrayCarritoLocal);

    const noHayItems = () => {

        return (
            <div className="nohayitems"> < button type="button" class="btn btn-light" > No hay productos en tu carrito < Link to='/productos' > <button type="button" class="btn btn-link">Accede aquí para ver nuestros productos</button></Link ></button > </div>
        )
    }

    const siHayItems = () => {
        return (
            arrayCarritoLocal.map((x) => < CartItem className="itemscarrito" id={x.id} name={x.name} price={x.price} quantity={x.quantity} URL={x.link} />)
        )
    }


    return (
        <>
            <h2>Bienvenido al carrito</h2>
            <p>Observa abajo los items que has agregado hasta ahora</p>
            {/* {arrayCarritoLocal.map((x) => < CartItem className="items" id={x.id} name={x.name} price={x.price} quantity={x.quantity} URL={x.link} />)} */}
            {arrayCarrito.cart.length > 0 ? siHayItems() : noHayItems()}
            {arrayCarrito.cart.length > 0 ? <AddUsername /> : <></>}
            {arrayCarrito.cart.length > 0 ? <><div id="div-inputtotal" className="input-group input-group-lg"><div className="input-group-prepend"><span className="input-group-text" id="inputGroup-sizing-lg">Precio Total</span></div><input type="text" className="form-control" value={arrayCarrito.getTotalPrice()} aria-label="Large" aria-describedby="inputGroup-sizing-sm" /></div><button onClick={() => { arrayCarrito.clear() }} type="button" className="btn btn-danger" id="limpiarcarrito">Limpiar Carrito</button></> : <></>}




            {/* <div className="input-group input-group-lg">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Precio Total</span>
                </div>
                <input type="text" className="form-control" value={arrayCarrito.getTotalPrice()} aria-label="Large" aria-describedby="inputGroup-sizing-sm" />
            </div>

            <button onClick={() => { arrayCarrito.clear() }} type="button" className="btn btn-danger">Limpiar Carrito</button> */}
        </>

    )



}

export default Cart;