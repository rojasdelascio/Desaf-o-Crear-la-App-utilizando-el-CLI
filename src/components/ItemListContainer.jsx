import './ItemListContainer.css';
import ItemList from './ItemList';
import { arrayProductos } from '../data/productos';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';

function ItemListContainer(props) {


    const [items, setItems] = useState([]);
    let { tipo } = useParams();


    //FIREBASE
    // const obtenerItems = () => {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             const myData = tipo ? arrayProductos.filter((item) => item.Tipo === tipo) : arrayProductos;

    //             resolve(myData);
    //         }, 500);
    //     }
    //     )
    // }


    // useEffect(() => {
    //     obtenerItems()

    //         .then(res => setItems(res))
    //         .catch(err => console.log(err))
    // }, [tipo])

    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((snapshot) => {
            if (tipo) {
                let itemsTemp = snapshot.docs.filter((doc) => doc.data().Tipo == tipo)
                setItems(itemsTemp.map(doc => doc.data()));
                console.log('items filtrados', items);

            } else {
                setItems(snapshot.docs.map(doc => doc.data()));
                console.log('items NO filtrados', items);
            }

        })
    }, [tipo])


    //FIN FIREBASE

    return (
        <div className="div-bienvenida">
            <h2 className="texto-bienvenida">{props.texto}</h2>
            {/* <ItemList array={items} /> */}
            <ItemList array={items} />

        </div >


    );
}

export default ItemListContainer;