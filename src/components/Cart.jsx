import React from 'react';
import { useCart } from './Context/CartContext';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import CartItem from './CartItem';

function Cart() {

    const arrayCarrito = useCart();
    console.log('DESDECART', arrayCarrito);

    const arrayCarritoLocal = arrayCarrito.cart;
    console.log('DESDECART', arrayCarritoLocal);





    return (
        <>
            <h2>WELCOME TO CART</h2>
            {arrayCarritoLocal.map((x) => < CartItem className="items" id={x.id} name={x.name} price={x.price} quantity={x.quantity} />)}


        </>

    )



}

export default Cart;