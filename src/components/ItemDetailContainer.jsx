import './ItemDetailContainer.css';
import { useState, useEffect, useContext } from 'react';
import ItemDetail from './ItemDetail';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import Item from './Item';
import CartContexto from './Context/CartContext';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';



function ItemDetailContainer() {


    const [itemDetails, setItemDetails] = useState([]);
    let { detalleID } = useParams();
    console.log('DETALLEOD', detalleID)

    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((snapshot) => {
            if (detalleID) {
                console.log(detalleID)
                let itemsTemp = snapshot.docs.find((doc) => doc.data().id == detalleID)
                setItemDetails(itemsTemp.data());


            }
        })
    }, [detalleID])


    return (
        <>

            < ItemDetail {...itemDetails} />

        </>


    );










}

export default ItemDetailContainer;