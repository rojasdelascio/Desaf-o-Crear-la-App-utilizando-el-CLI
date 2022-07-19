import React from 'react';
import { useCart } from './Context/CartContext';


function CartItem(props) {




    return (
        <>
            <div class="card bg-light mb-3" >
                <div class="card-header">Nombre: {props.name}</div>
                <div class="card-body">
                    <h5 class="card-title">Cantidad: {props.quantity} unidades</h5>
                    <h5 class="card-title">Precio Total: {props.price * props.quantity}$</h5>

                    <div className="btn-group" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">-</button>
                        <input className="input" value='{count}' />
                        <button type="button" className="btn btn-secondary">+</button>
                        <button type="button" class="btn btn-danger">Eliminar Item</button>
                    </div >

                </div>
            </div>
        </>

    )

}



export default CartItem;