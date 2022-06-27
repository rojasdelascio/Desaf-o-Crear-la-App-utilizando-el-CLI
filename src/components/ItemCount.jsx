import './ItemCount.css';
import React, { useState } from 'react';
import ItemsCounter from './ItemsCounter';

function ItemCount(props) {
    const [count, setItemCount] = useState(0);
    const suma = () => {
        if (count < props.stock) { setItemCount(count + 1) }
    }

    const resta = () => {
        if (count > 0) { setItemCount(count - 1) }
    }

    const reiniciar = () => {
        if (count > 0) { setItemCount(0) }
    }
    const onAdd = () => {
        console.log(`Se agregaron al carrito ${count} unidades de ${props.nombre}`)

    }
    return (
        <div className="btn-group" role="group" aria-label="Basic example">
            <button onClick={resta} type="button" className="btn btn-secondary">-</button>
            <button type="button" className="btn btn-secondary">{count}</button>
            <button onClick={suma} type="button" className="btn btn-secondary">+</button>
            <button onClick={onAdd} type="button" className="btn btn-success">Añadir al carrito</button>
            <button onClick={reiniciar} type="button" class="btn btn-primary">Reiniciar</button>
        </div>

    );
}

export default ItemCount;