import React, { useState, useEffect } from 'react'
import { CartContext, useCartContext } from '../Context/CartContext';
import './css/Cart.css';
import { Link } from 'react-router-dom';
export default function Cart() {

    const { cart, removeItem, clearCart, totalPrice } = useCartContext(CartContext);

    console.log(totalPrice())

    return (
        <div>
            <div class="wrap cf">
                <div class="heading cf">
                    <h1>Mi carrito</h1>
                    <Link to="/"> <a href="#" class="continue">Continuar comprando</a></Link>

                </div>
                <div class="cart">
                    <ul class="cartWrap">
                        {cart.map(u =>
                            <li class="items odd">
                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img src={'https://http2.mlstatic.com/' + u.img} alt="" class="itemImg" />
                                        <p class="itemNumber">{u.id}</p>
                                        <h3>{u.nombre}</h3>
                                        <p> <input type="text" class="qty" /> Cantidad: {u.cantidad + 1}</p>
                                        <p class="stockStatus"> In Stock</p>
                                    </div>
                                    <div class="prodTotal cartSection">
                                        <p>$ {u.precio * u.cantidad}</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <input onClick={() => removeItem(u.id)} type="button" class="agregar" value="X" />
                                    </div>
                                </div>
                            </li>
                        )}
                    </ul>
                </div>
                <div class="subtotal cf">
                    <ul>
                        <li class="totalRow final"><span class="label">Total ${totalPrice()}</span><span class="value"> </span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Comprar</a></li>
                        <br /><br />

                    </ul>
                    <a href="#" onClick={() => clearCart()} class=""><br /><br />Limpiar carrito</a>
                </div>
            </div >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script src="./script.js"></script>
        </div >
    )
}
