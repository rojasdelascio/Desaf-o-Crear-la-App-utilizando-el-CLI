import './ItemListContainer.css';
import ItemList from './ItemList';

function ItemListContainer(props) {

    return (
        <div className="div-bienvenida">
            <h2 className="texto-bienvenida">{props.texto}</h2>
            <ItemList />
        </div>


    );
}

export default ItemListContainer;