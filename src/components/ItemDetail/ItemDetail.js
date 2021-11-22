import React from 'react';
import { useCartConext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';


function ItemDetail({ item }) {
    const { addItem, remover, clearCart } = useCartConext;
    console.log("mensaje", item)
    console.log("tamaño", item.length)



    return (

        <div class="flex">
            <img src={item[0].img} />
            <button onClick={() => addItem({ id: 1, name: "Producto" }, 2)}>Agregar</button>
            <button onClick={() => remover(1)}>Remover</button>

            <div class="textos">
                <h2>{item[0].name}</h2>
                <br />
                <p class="precio">$ {item[0].price}</p>
                <br />
                <p>{item[0].description}</p>
                <br /><br />
                <ItemCount stock={item[0].stock} initial={1} />
            </div>


        </div>
    )
}

export default ItemDetail