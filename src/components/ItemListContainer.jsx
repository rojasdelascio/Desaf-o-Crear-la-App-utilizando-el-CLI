import './ItemListContainer.css';

function ItemListContainer(props) {

    return (
        <div className="div-bienvenida">
            <h2 className="texto-bienvenida">{props.texto}</h2>

        </div>


    );
}

export default ItemListContainer;