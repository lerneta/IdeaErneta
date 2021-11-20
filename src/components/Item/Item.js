import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';
function Item({ id, producto, precio, descripcion, url }) {

    return (
        <div>
            <div class="card">
                <img class="img" src={url} alt={producto} />
                <h1><NavLink to={`/item/${id}`} exact> {producto}</NavLink></h1><br />
                <p class="price">$ {precio}</p><br />
                <p>{descripcion}</p><br />
                <p><button>Agregar al carrito</button></p>
            </div>
        </div >
    )
}

export default Item
