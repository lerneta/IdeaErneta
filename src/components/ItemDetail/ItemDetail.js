import React, { useState } from 'react';
import { CartContext, useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

import { Link } from 'react-router-dom';


function ItemDetail({ item }) {
    const { addItem, remover, clearCart } = useCartContext(CartContext);
    const [Visibilidad, setVisibilidad] = useState("");


    console.log("mensaje", item)
    console.log("tamaño", item.length)

    const aparecer = () => {
        if (Visibilidad == "") {
            setVisibilidad("hidden");
        } else {
            setVisibilidad("");
        }
        console.log(Visibilidad);
    }

    const abrirventana = () => {
        addItem(item[0].id, item[0].name);
        aparecer();
    }



    return (

        <div class="flex">
            {Visibilidad ? (
                <div class="cartel">
                    <div class="cartel2">
                        ¿Seguro que quiere agregar este producto?
                        <div class="flex">
                            <input type="button" class="buton" onClick={() => abrirventana()} value="Sí" />
                            <input class="buton" onClick={() => aparecer()} type="button" value="No" />
                        </div>
                    </div>
                </div>
            ) : (
                <div></div>
            )}
            <img src={item[0].img} />
            <div class="textos">
                <h2>{item[0].name}</h2>
                <br />
                <p class="precio">$ {item[0].price}</p>
                <br />
                <p>{item[0].description}</p>
                <br /><br />
                <ItemCount stock={item[0].stock} initial={1} />
                <input onClick={() => aparecer()} type="button" value="Agregar" class="agregar" />
                <input onClick={() => remover(item[0].id)} type="button" value="Remover" class="agregar" />
                <input onClick={() => clearCart()} type="button" value="Limpiar Carrito" class="agregar" />

            </div>


        </div >
    )
}

export default ItemDetail