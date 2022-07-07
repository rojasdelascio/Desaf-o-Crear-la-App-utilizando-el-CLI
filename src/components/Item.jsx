import './Item.css';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import { Link } from 'react-router-dom';


function Item(props) {
    console.log('en ITEM');
    console.log(props.tipo);
    console.log(props.nombre);
    console.log(props.URL);
    console.log(`EL ID ES ESTE EN ITEM + ${props.id}`);

    const imgto = `/${props.URL}`
    const linkto = `/detalles/${props.id}`;
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" src={imgto} alt="Card image cap" />
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Disponible: {props.stock}</p>
                <p>Tipo: {props.tipo}</p>
                <p className="card-text">{props.descripcion}</p>
                <Link class="btn btn-primary" to={linkto} >Saber más</Link>

            </div>
            <ItemCount stock={props.stock} />

        </div>

    );
}

export default Item;