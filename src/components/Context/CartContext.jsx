import React, { useEffect, useMemo } from 'react'
import { useContext } from 'react';
import { useState } from 'react'



// DUDA:  ¿se tiene que llamar esta constante igual que el archivo?
export const CartContext = React.createContext();

export const useCart = () => useContext(CartContext);

const INITIAL_STATE = [];


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(INITIAL_STATE);


    const addItem = (item, count) => {

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
