import { RiShoppingCart2Line } from 'react-icons/ri';
import './CartWidget.css'
import { useState } from 'react';

import { Link } from 'react-router-dom';

function CartWidget(props) {

    return (
        <div className="div-cart">
            <Link to="/cart">   <RiShoppingCart2Line className="icono-cart" />
                <p className="contador-cart">1</p></Link>
        </div>
    );


}

export default CartWidget;