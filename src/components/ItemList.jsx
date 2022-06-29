import './ItemList.css';
import Item from './Item';
import React, { useState } from 'react';

function ItemList(props) {
    console.log('array en itemList');
    console.log(props.array);

    return (
        <div className="div-itemList">
            {props.array.map((item) => < Item className="items" tipo={item.Tipo} nombre={item.Nombre} stock={item.Stock} descripcion={item.Descripcion} precio={item.Precio} URL={item.URL} />)}
        </div>
    );
}

export default ItemList;