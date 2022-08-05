import './ItemList.css';
import Item from './Item';
import React, { useState } from 'react';

function ItemList(props) {


    return (
        <div className="div-itemList">
            {props.array.map((item) => < Item className="items" key={item.id} id={item.id} tipo={item.Tipo} nombre={item.Nombre} stock={item.Stock} descripcion={item.Descripcion} precio={item.Precio} URL={item.URL} />)}
        </div>
    );
}

export default ItemList;