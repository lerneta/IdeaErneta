import React from 'react'
import { CartContext, useCartContext } from '../Context/CartContext';
import './css/Cart.css';
import { Link } from 'react-router-dom';

export default function Cart() {
    const { addItem, remover, clearCart } = useCartContext(CartContext);
    return (
        <div>
            <div class="wrap cf">
                <div class="heading cf">
                    <h1>Mi carrito</h1>
                    <Link to="/"> <a href="#" class="continue">Continuar comprando</a></Link>
                </div>
                <div class="cart">

                    <ul class="cartWrap">
                        <li class="items odd">

                            <div class="infoWrap">
                                <div class="cartSection">
                                    <img src="https://http2.mlstatic.com/D_NQ_NP_2X_935880-MLA44091055445_112020-F.jpg" alt="" class="itemImg" />
                                    <p class="itemNumber">#QUE-007544-002</p>
                                    <h3>Item Name 1</h3>

                                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                                    <p class="stockStatus"> In Stock</p>
                                </div>


                                <div class="prodTotal cartSection">
                                    <p>$15.00</p>
                                </div>
                                <div class="cartSection removeWrap">
                                    <a href="#" class="remove">x</a>
                                </div>
                            </div>
                        </li>





                    </ul>
                </div>

                <div class="subtotal cf">
                    <ul>
                        <li class="totalRow"><span class="label">Subtotal</span><span class="value">$35.00</span></li>

                        <li class="totalRow"><span class="label">Envío</span><span class="value">$5.00</span></li>

                        <li class="totalRow"><span class="label">Impuestos</span><span class="value">$4.00</span></li>
                        <li class="totalRow final"><span class="label">Total</span><span class="value">$44.00</span></li>
                        <li class="totalRow"><a href="#" class="btn continue">Comprar</a></li>
                    </ul>
                </div>
            </div>

            <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script src="./script.js"></script>
        </div>
    )
}
