import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
    console.log("mensaje", item)
    console.log("tamaño", item.length)
    return (
        <div class="flex">
            <img src={item[0].img} />
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