import './ItemDetailContainer.css';
import { arrayProductos } from '../data/productos';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import Item from './Item';



function ItemDetailContainer() {


    const [itemDetails, setItemDetails] = useState([]);
    let { detalleID } = useParams();


    const obtenerItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const myData = detalleID ? arrayProductos.find((item) => item.id == detalleID) : arrayProductos;

                resolve(myData);
            }, 2000);
        })
    }

    useEffect(() => {

        obtenerItemDetails()
            .then(res => setItemDetails(res))
            .catch(err => console.log(err))
    }, [detalleID])




    return (
        <>
            {/* <ItemDetail {...itemDetails} /> */}
            < ItemDetail {...itemDetails} />

        </>


    );










}

export default ItemDetailContainer;