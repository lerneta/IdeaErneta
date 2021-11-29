import React, { useContext, createContext, useState } from "react";
export const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);


const CartProvider = ({ children }) => {

    const [cantidad, setcantidad] = useState(1);
    const [amount, setamount] = useState(0);


    const [cart, setCart] = useState([]);
    const addItem = (id, nombre, img, precio) => {
        if (isInCart(id)) {
            console.log("No se puede seleccionar este producto!")

        } else {
            setCart([...cart, { id, nombre, cantidad, img, precio }])
        }
    }
    const remover = (id) => {
        console.log("llego")
        setCart(
            cart.filter(item => item.id !== id)
        )
    }

    const removeItem = (itemId) => {
        const deleteProduct = cart.filter(item => item.id !== itemId);
        setCart([...deleteProduct])
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

    const devolvervalores = () => {
        return cart;
    }


    const totalPrice = () => {


        const sumall = cart.map(item => item.precio * item.cantidad).reduce((prev, curr) => prev + curr, 0);
        setamount(sumall);

        return amount;
    }

    console.log("valor", cart);

    return <CartContext.Provider value={{ addItem, remover, removeItem, clearCart, configcantidad, devolvervalores, cart, totalPrice }}>
        {children}
    </CartContext.Provider>
}

export default CartProvider