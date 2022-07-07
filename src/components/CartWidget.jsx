import { RiShoppingCart2Line } from 'react-icons/ri';
import './CartWidget.css'
import { useState } from 'react';
import ItemsCounter from './ItemsCounter';

function CartWidget(props) {

    return (
        <div className="div-cart">
            <RiShoppingCart2Line className="icono-cart" />
            <p className="contador-cart">1</p>
        </div>
    );


}

export default CartWidget;