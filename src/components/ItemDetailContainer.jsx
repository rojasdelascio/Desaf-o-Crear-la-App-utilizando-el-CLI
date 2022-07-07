import './ItemDetailContainer.css';
import { arrayProductos } from '../data/productos';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import Item from './Item';



function ItemDetailContainer() {


    const [itemDetails, setItemDetails] = useState([]);
    let { detalleID } = useParams();

    console.log('ACA EL ID DE DETALLESSS')
    console.log(detalleID);

    const obtenerItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const myData = detalleID ? arrayProductos.find((item) => item.id == detalleID) : arrayProductos;
                console.log('MYDATA DETALLESS');
                console.log(myData);
                resolve(myData);
            }, 2000);
        })
    }

    useEffect(() => {
        console.log("CORRIO USE EFFECT")
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