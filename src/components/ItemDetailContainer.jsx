import './ItemDetailContainer.css';
import { arrayProductos } from '../data/productos';
import { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {

    const [itemDetails, setItemDetails] = useState([]);

    const obtenerItemDetails = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const data = arrayProductos.find((item) => item.id === 1)
                resolve(data);
            }, 2000);
        })
    }

    useEffect(() => {
        obtenerItemDetails()
            .then(res => setItemDetails(res))
            .catch(err => console.log(err))
    }, [])

    console.log('itemdetaaaails')
    console.log(itemDetails)

    return (
        <>

            <ItemDetail {...itemDetails} />

        </>


    );










}

export default ItemDetailContainer;