import React, { useState, useEffect } from 'react'
import { CartContext, useCartContext } from '../Context/CartContext';
import './css/Cart.css';
import { Link } from 'react-router-dom';
import { getFirestore } from "../firebase/firebase";
import firebase from 'firebase';
import 'firebase/firestore';

export default function Cart() {



    const { cart, removeItem, clearCart, totalPrice } = useCartContext(CartContext);

    console.log(totalPrice())
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')

    const guardartodo = () => {
        console.log("cart", cart)
        const current = new Date();
        const fecha = firebase.firestore.Timestamp.fromDate(current);

        const user = { email: email, name: name, phone: phone }


        const cart2 = [];
        cart.map(u => cart2.push({ id: u.id, title: u.nombre, price: u.precio }))


        const db = getFirestore();
        const orders = db.collection("cart");
        const newOrder = {
            buyer: user,
            items: cart2,
            date: fecha,
            price: totalPrice()
        }
        orders.add(newOrder).then(({ id }) => {
            alert("¡Gracias por su compra! Su número de orden es " + id);
            clearCart();
            setname();
            setemail();
            setphone();
            window.location = '/';
        })

    }

    return (
        <div>
            <div class="wrap cf">
                <div class="heading cf">
                    <h1>Mi carrito</h1>
                    <Link to="/"> <a href="#" class="continue">Continuar comprando</a></Link>
                </div>
                <div class="cart">
                    <div class="flex2"><input type="text" placeholder="Nombre" onChange={event => setname(event.target.value)} />
                        <input type="text" placeholder="email" onChange={event => setemail(event.target.value)} />
                        <input type="text" placeholder="Teléfono" onChange={event => setphone(event.target.value)} /></div>
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
                        <li class="totalRow" onClick={() => guardartodo()}><a href="#" class="btn continue">Comprar</a></li>
                        <br /><br />

                    </ul>
                    <a href="#" onClick={() => clearCart()} class=""><br /><br />Limpiar carrito</a>
                </div>
            </div >
            <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script><script src="./script.js"></script>
        </div >
    )
}
