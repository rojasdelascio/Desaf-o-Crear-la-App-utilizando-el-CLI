import './ItemListContainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs } from 'firebase/firestore';
import LoadingSpinner from './Loading';

function ItemListContainer(props) {


    const [items, setItems] = useState([]);
    let { tipo } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((snapshot) => {
            if (tipo) {
                let itemsTemp = snapshot.docs.filter((doc) => doc.data().Tipo == tipo)
                setItems(itemsTemp.map(doc => doc.data()));


            } else {
                setItems(snapshot.docs.map(doc => doc.data()));
                setIsLoading(false);
            }

        })
    }, [tipo])


    return (
        <div className="div-bienvenida">
            <h2 className="texto-bienvenida">{props.texto}</h2>
            {props.intro}
            {isLoading ? <LoadingSpinner /> : <ItemList array={items} />}

        </div >

        // {isLoading ? <LoadingSpinner /> :
    );
}

export default ItemListContainer;