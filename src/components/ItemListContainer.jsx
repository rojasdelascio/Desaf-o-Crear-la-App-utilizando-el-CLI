import './ItemListContainer.css';
import ItemList from './ItemList';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getFirestore, doc, getDoc, collection, getDocs, query, where } from 'firebase/firestore';
import LoadingSpinner from './Loading';

function ItemListContainer(props) {


    const [items, setItems] = useState([]);
    let { tipo } = useParams();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        const db = getFirestore();
        const productosRef = collection(db, "productos");

        getDocs(productosRef).then((snapshot) => {
            if (tipo) {
                const q = query(collection(db, "productos"), where("Tipo", "==", tipo));
                getDocs(q).then((snapshot) => {
                    if (snapshot.size === 0) {
                        console.log("no hay resultados");
                    } else {
                        setItems(snapshot.docs.map((doc) => (doc.data())));
                        setIsLoading(false);
                    }
                })
                // let itemsTemp = snapshot.docs.filter((doc) => doc.data().Tipo == tipo)
                // setItems(itemsTemp.map(doc => doc.data()));
            } else {

                setItems(snapshot.docs.map(doc => doc.data()));
                setIsLoading(false);
            }

        })
    }, [tipo])


    return (
        <div className="div-bienvenida">

            {props.intro}
            {isLoading ? <LoadingSpinner /> : <ItemList array={items} />}

        </div >

        // {isLoading ? <LoadingSpinner /> :
    );
}

export default ItemListContainer;