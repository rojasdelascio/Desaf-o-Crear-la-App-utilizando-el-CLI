import './Item.css';
import ItemCount from './ItemCount';
import CartWidget from './CartWidget';


function Item(props) {

    return (


        <div className="card">
            <div className="card-body">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">Disponible: {props.stock}</p>
                <p>Tipo: {props.tipo}</p>
                <p className="card-text">{props.descripcion}</p>
                <a href="#" class="btn btn-primary">Saber más</a>

            </div>
            <ItemCount stock={props.stock} nombre={props.nombre} />

        </div>


    );
}

export default Item;