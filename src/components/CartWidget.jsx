import { RiShoppingCart2Line } from 'react-icons/ri';
import './CartWidget.css'
import { useState } from 'react';
import { useContext } from 'react';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import { useCart } from './Context/CartContext';

function CartWidget(props) {
    const carrito = useCart();

    return (
        <div className="div-cart">

            {carrito.cart.length === 0 ? <></> : <><Link to="/cart"><RiShoppingCart2Line className="icono-cart" /><button type="button" className="btn btn-secondary">{carrito.getQuantity()}</button></Link></>}

        </div>
    );


}

export default CartWidget;