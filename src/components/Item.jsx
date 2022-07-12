import './Item.css';
import ItemCount from './ItemCount';
import ItemDetailContainer from './ItemDetailContainer';
import { Link } from 'react-router-dom';


function Item(props) {


    const imgto = `/${props.URL}`
    const linkto = `/item/${props.id}`;
    return (
        <div className="card">
            <div className="card-body">
                <img className="card-img-top" src={imgto} alt="Card image cap" />
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Disponible: {props.stock}</p>
                <p>Tipo: {props.tipo}</p>
                <p className="card-text">{props.descripcion}</p>
                <Link className="btn btn-primary" to={linkto} >Saber más</Link>

            </div>
            {/* <ItemCount stock={props.stock} /> */}

        </div>

    );
}

export default Item;