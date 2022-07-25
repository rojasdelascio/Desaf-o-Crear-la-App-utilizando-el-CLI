import React, { useEffect, useMemo } from 'react'
import { useContext } from 'react';
import { useState } from 'react'

// DUDA:  ¿se tiene que llamar esta constante igual que el archivo?
export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = [];

// DUDA: ¿lo que se debe exportar para envolver a los hijos entonces es la funcion que contiene a las funciones a transferir?
// DUDA: ¿que son esos children? ¿los children de lo que envuelvo? ¿que pasa si no los pongo?
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(INITIAL_STATE);


    // const sumaProductosF = () => {
    //     cart.forEach(i => {
    //         return sumaProductosCopia = sumaProductosCopia + i.quantity;
    //     })
    // }

    // useEffect(() => {
    //     setSumaProductos(sumaProductosF());
    //     console.log(sumaProductos)
    // }, [cart])


    const addItem = (item, count) => {
        //DUDA:¿Por que abajo no me dejo hacerlo con {...cart,...item} me decia que item no era iterable
        //si voy a otro item desde home y lo agrego, me dice que cart.push no es una funcion
        //de la forma de abajo, me esta agregando los items, recien cuando doy click en OTRO item, como q los pone en cola

        const isInCart = (x) => { return cart.some(i => i.id === x) }

        if (isInCart(item.id)) {
            const cartAux = cart.map(i => {
                if (i.id === item.id) {
                    const cantidadTotal = item.quantity + i.quantity;
                    if (cantidadTotal <= i.stock) { i.quantity = cantidadTotal; }
                    else { console.log('Elegiste una cantidad que supera el stock disponble') }
                }
                return i;
            })
            console.log('CARTAUZZZZ', cartAux);
            setCart(cartAux);


        } else {
            setCart([...cart, { ...item, quantity: count }]);

        }
    }


    const disminuirItem = (id) => {
        const cartCopia = cart.slice(0)
        cartCopia.forEach(i => {
            if (i.id === id) {
                if (i.quantity > 0) {
                    i.quantity = i.quantity - 1;
                }
            }
        })
        setCart(cartCopia)
    }

    const aumentarItem = (id) => {
        const cartCopia2 = cart.slice(0)
        cartCopia2.forEach(i => {
            if (i.id === id) {
                if (i.quantity >= 0) {
                    if (i.quantity < i.stock)
                        i.quantity = i.quantity + 1;
                }
            }
        })
        setCart(cartCopia2)
    }

    const removeItem = (itemid) => {
        const indexF = (i) => { return i.id !== itemid }
        setCart(cart.filter(indexF));
    }

    const getQuantity = () => {
        let cantidadTotalItems = 0;
        cart.forEach(i => cantidadTotalItems = cantidadTotalItems + parseInt(i.quantity))
        console.log('CANTOTALITEEEMS', cantidadTotalItems)
        return cantidadTotalItems;
    }


    const getTotalPrice = () => {
        let precioTotal = 0;
        cart.forEach(i => precioTotal = precioTotal + (i.price * i.quantity))
        return precioTotal

    }

    const clear = () => {
        setCart(INITIAL_STATE);
    };


    return (
        <CartContext.Provider value={{ cart, addItem, clear, disminuirItem, removeItem, aumentarItem, getQuantity, getTotalPrice }}>
            {/* //si no pongo estos children no se muestra nada, supongo que porque vienen de lo que envuelves en index */}
            {children}
        </CartContext.Provider>
    )
};
