import React from 'react';
import './Item.css';

function Item({ producto, precio, descripcion, url }) {

    return (
        <div>
            <div class="card">
                <img src={url} alt={producto} />
                <h1>{producto}</h1><br />
                <p class="price">$ {precio}</p><br />
                <p>{descripcion}</p><br />
                <p><button>Agregar al carrito</button></p>
            </div>
        </div>
    )
}

export default Item
