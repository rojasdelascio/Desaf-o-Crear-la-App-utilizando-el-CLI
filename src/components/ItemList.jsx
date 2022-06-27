import './ItemList.css';
import Item from './Item';
import React, { useState } from 'react';

function ItemList() {
    const [contadorTotal, changeContadorTotal] = useState(0);
    const items = [{ Nombre: "Juntos, por siempre...", Tipo: "Cortometraje", Descripcion: "Clara y Agustin se mudan temporalmente a su casa de campo, para que Clara pueda adaptarse a su medicación para la esquizofrenia y atenuar los efectos. Eventos extraños comienzan a suceder en la casa, que hacen a Clara y Agustin dudar de la realidad en la que viven ", Precio: 5, Stock: 20 }, { Nombre: "Closure", "Tipo": "Album", Descripcion: "Primer álbum musical del cantautor Gustavo Delascio. Gustavo inventa un nuevo estilo de pop/soul, incluyendo instrumentos autóctonos de su país natal, Venezuela. Con canciones en inglés y español, Gustavo nos cuenta todo sobre sus 30 años de vida", Precio: 10, Stock: 15 }, { Nombre: "Lo que aquellos 'Cuentos Peregrinos' me enseñaron", "Tipo": "Libro", Descripcion: "Primer libro de Gustavo Delascio. 12 cuentos cortos, que transitan desde el realismo mágico hasta las distopías, pasando por el terror. Gustavo hace honor en su libro, a '12 cuentos peregrinos' de Gabriel García Marquez", Precio: 8, Stock: 10 }];


    return (


        <div className="div-itemList">
            <Item className="items" tipo={items[0].Tipo} nombre={items[0].Nombre} stock={items[0].Stock} descripcion={items[0].Descripcion} precio={items[0].Precio} />
            <Item className="items" tipo={items[1].Tipo} nombre={items[1].Nombre} stock={items[1].Stock} descripcion={items[1].Descripcion} precio={items[1].Precio} />
            <Item className="items" tipo={items[2].Tipo} nombre={items[2].Nombre} stock={items[2].Stock} descripcion={items[2].Descripcion} precio={items[2].Precio} />
            <p>{contadorTotal}</p>

        </div>


    );
}

export default ItemList;