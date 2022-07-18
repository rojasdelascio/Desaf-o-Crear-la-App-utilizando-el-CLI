import React, { useEffect, useMemo } from 'react'
import { useContext } from 'react';
import { useState } from 'react'

// DUDA:  ¿se tiene que llamar esta constante igual que el archivo?
export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

class itemNuevo {
    constructor(id, nombre, precio, cantidad) {
        this.id = id;
        this.name = nombre;
        this.quantity = cantidad;
        this.price = precio;

    }
}

const INITIAL_STATE = [];

// DUDA: ¿lo que se debe exportar para envolver a los hijos entonces es la funcion que contiene a las funciones a transferir?
// DUDA: ¿que son esos children? ¿los children de lo que envuelvo? ¿que pasa si no los pongo?
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(INITIAL_STATE);

    const addItem = (item, count) => {
        //DUDA:¿Por que abajo no me dejo hacerlo con {...cart,...item} me decia que item no era iterable
        //si voy a otro item desde home y lo agrego, me dice que cart.push no es una funcion
        //de la forma de abajo, me esta agregando los items, recien cuando doy click en OTRO item, como q los pone en cola
        if (cart.some(i => i.id === item.id)) {

            console.log('YA ESTA EN EL ARRAYYY')
            cart.forEach(i => {
                if (i.id === item.id) {
                    const cantidadTotal = item.quantity + i.quantity;
                    if (cantidadTotal <= i.stock) { i.quantity = cantidadTotal; }
                    // Tienes que añadir que si el cantidadTotal super stock, a itemDetail vaya un error cuando añadas al cart
                    else { console.log('Elegiste una cantidad que supera el stock disponble') }
                }
            })
        } else {
            setCart([...cart, { ...item }]);

        }



        console.log('CAAAAART', cart);

    }

    const newAddedItems = () => { }

    const clear = () => {
        setCart(INITIAL_STATE);
    };


    return (
        <CartContext.Provider value={{ cart, addItem, clear }}>
            {/* //si no pongo estos children no se muestra nada, supongo que porque vienen de lo que envuelves en index */}
            {children}
        </CartContext.Provider>
    )
};


// const CartContexto = React.createContext();



// export function CartContextProvider({ children }) {

//     const [itemLista, setItemLista] = useState();

//     const addItem = (item, counter) => {
//         //no tiene que ver con el contenido de item
//         console.log('addItem')
//         console.log(item, counter);

//         setItemLista([
//             ...itemLista,
//             {
//                 item: item,
//                 cantidad: counter
//             }])

//     }


//     const value = useMemo(() => {
//         return ({
//             addItem
//         })
//     })

//     return (
//         <CartContexto.Provider value={value} >
//             {children}
//         </CartContexto.Provider>
//     )

// }

// export function useContexto() {
//     const context = React.useContext(CartContexto);

//     return context;
// }