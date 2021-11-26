import React, { useState, useEffect } from 'react'
import { CartContext, useCartContext } from '../Context/CartContext';
import './css/Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {

    const { devolvervalores, remover } = useCartContext(CartContext);

    const [productos, setproductos] = useState([])
    const [amount, setamount] = useState(0)

    useEffect(() => {
        setproductos(devolvervalores);


        let sum = 0;
        for (var i = 0; i < productos.length; i++) {
            sum += productos[i].precio * productos[i].cantidad;
        }
        setamount(sum);
        actualizar(0);
    }, []);


    const actualizar = (id) => {
        if (id > 0) {
            remover(id);
            console.log("hola");
        }
        setproductos(devolvervalores);
        let sum = 0;
        for (var i = 0; i < productos.length; i++) {
            sum += productos[i].precio * productos[i].cantidad;
        }
        setamount(sum);
    }

    console.log("productos", productos);


    return (
        <div>
            <div class="wrap cf">
                <div class="heading cf">
                    <h1>Mi carrito</h1>
                    <Link to="/"> <a href="#" class="continue">Continuar comprando</a></Link>
                </div>
                <div class="cart">

                    <ul class="cartWrap">

                        {productos != undefined || productos != [] ? productos.map(u =>
                            <li class="items odd">
                                <div class="infoWrap">
                                    <div class="cartSection">
                                        <img src={u.img} alt="" class="itemImg" />
                                        <p class="itemNumber">{u.id}</p>
                                        <h3>{u.nombre}</h3>

                                        <p> <input type="text" class="qty" /> Cantidad: {u.cantidad + 1}</p>

                                        <p class="stockStatus"> In Stock</p>
                                    </div>


                                    <div class="prodTotal cartSection">
                                        <p>$ {u.precio * (u.cantidad + 1)}</p>
                                    </div>
                                    <div class="cartSection removeWrap">
                                        <input onClick={() => actualizar(u.id)} type="button" value="Remover" class="agregar" />
                                    </div>
                                </div>
                            </li>

                        ) : "No hay productos :("}



                    </ul>
                </div>

                <div class="subtotal cf">
                    <ul>

                        <li class="totalRow final"><span class="label">Total</span><span class="value">$ {amount}</span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Comprar</a></li>
                    </ul>
                </div>
            </div>

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script src="./script.js"></script>
        </div>
    )
}
