import React from 'react'
import { CartContext, useCartContext } from '../Context/CartContext';

export default function Cart() {
    const { addItem, remover, clearCart } = useCartContext(CartContext);
    return (
        <div>


        </div>
    )
}
