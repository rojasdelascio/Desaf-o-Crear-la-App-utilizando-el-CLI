import './ItemListContainer.css';
import ItemList from './ItemList';
import { arrayProductos } from '../data/productos';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function ItemListContainer(props) {


    const [items, setItems] = useState([]);
    let { tipo } = useParams();
    console.log('PARAAAM');
    console.log(tipo);
    console.log('ARRAYPRODUCTOS222')
    console.log(arrayProductos);

    const obtenerItems = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const myData = tipo ? arrayProductos.filter((item) => item.Tipo === tipo) : arrayProductos;
                console.log('MY DATAAAA')
                console.log(myData);
                resolve(myData);
            }, 500);
        }
        )
    }


    useEffect(() => {
        obtenerItems()

            .then(res => setItems(res))
            .catch(err => console.log(err))
    }, [tipo])


    return (
        <div className="div-bienvenida">
            <h2 className="texto-bienvenida">{props.texto}</h2>
            {/* <ItemList array={items} /> */}
            <ItemList array={items} />

        </div >


    );
}

export default ItemListContainer;