import './ItemCount.css';
import React, { useState } from 'react';

import { Link } from 'react-router-dom';

function ItemCount(props) {
    const [count, setItemCount] = useState(1);
    const suma = () => {
        if (count < props.stock) { setItemCount(count + 1) }
    }

    const resta = () => {
        if (count > 1) { setItemCount(count - 1) }
    }

    const reiniciar = () => {
        if (count > 0) { setItemCount(0) }
    }

    const onAddLocal = (input) => {

        props.onAdd(input);

        setItemCount(0);
    }

    const handleChange = e => {
        setItemCount(e.target.value);
    }

    return (
        <div className="btn-group" role="group" aria-label="Basic example">

            <button onClick={resta} type="button" className="btn btn-secondary">-</button>
            {/* <button type="button" className="btn btn-secondary">{count}</button> */}
            <input onChange={handleChange} className="input" value={count} disabled />
            <button onClick={suma} type="button" className="btn btn-secondary">+</button>
            <button type="button" onClick={() => onAddLocal(count)} className="btn btn-success" >Añadir al carrito</button>

            {/* <Link>
                <button onClick={onAdd} type="button" className="btn btn-success">Añadir al carrito</button></Link> */}
            <button onClick={reiniciar} type="button" className="btn btn-primary">Reiniciar</button>

        </div >

    );
}

export default ItemCount;