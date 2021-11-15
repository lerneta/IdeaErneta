import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
function Item({ id, producto, precio, descripcion, url }) {

    return (
        <div>
            <div class="card">
                <img src={url} alt={producto} />
                <h1><Link to={`/item/${id}`}> {producto}</Link></h1><br />
                <p class="price">$ {precio}</p><br />
                <p>{descripcion}</p><br />
                <p><button>Agregar al carrito</button></p>
            </div>
        </div >
    )
}

export default Item
