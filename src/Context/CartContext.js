import React, { useContext, createContext, useState } from "react";
export const CartContext = createContext();
export const useCartConext = () => useContext(CartContext);


const CartProvider = ({ Children }) => {

    const [cart, setCart] = useState([]);
    const addItem = (id, cantidad) => {
        console.log("agregado");
    }
    const remover = (id) => {
        setCart(
            cart.filter(item => item.id !== id)
        )
    }
    const clearCart = () => (
        setCart([])
    )
    return <CartContext.Provider value={{ addItem, remover, clearCart }}>
        {Children}
    </CartContext.Provider>
}

export default CartProvider