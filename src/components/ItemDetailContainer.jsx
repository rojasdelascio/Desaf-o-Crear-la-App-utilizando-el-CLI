import './ItemDetailContainer.css';
import { useState, useEffect, useContext } from 'react';
import ItemDetail from './ItemDetail';
import { Route, Routes, Link, useParams } from 'react-router-dom';
import Item from './Item';
import CartContexto from './Context/CartContext';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import LoadingSpinner from './Loading';


function ItemDetailContainer() {

    const [isLoading, setIsLoading] = useState(true);
    const [itemDetails, setItemDetails] = useState([]);
    let { detalleID } = useParams();

    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((snapshot) => {
            if (detalleID) {

                let itemsTemp = snapshot.docs.find((doc) => doc.data().id == detalleID)
                setItemDetails(itemsTemp.data());
                setIsLoading(false);

            }
        })
    }, [detalleID])


    return (
        <>
            {isLoading ? <LoadingSpinner /> : < ItemDetail {...itemDetails} />}
            {/* {itemDetails ? < ItemDetail {...itemDetails} /> : <LoadingSpinner />} */}

        </>


    );










}

export default ItemDetailContainer;