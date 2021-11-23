import React, { useContext, createContext, useState } from "react";
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

    const [cantidad, setcantidad] = useState(1);
    const [valor, setValor] = useState({});

    const [cart, setCart] = useState([]);
    const addItem = (id, nombre) => {
        if (isInCart(id)) {
            console.log("No se puede seleccionar este producto!")

        } else {
            setCart([...cart, { id, nombre, cantidad }])
        }
    }
    const remover = (id) => {
        setCart(
            cart.filter(item => item.id !== id)
        )
    }
    const clearCart = () => (
        setCart([])
    )


    const configcantidad = (dato) => {
        setcantidad(dato);
    }

    const isInCart = (id) => {
        return cart.some(cartitem => cartitem.id === id);

    }

    console.log("valor", cart);

    return <CartContext.Provider value={{ addItem, remover, clearCart, configcantidad }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider