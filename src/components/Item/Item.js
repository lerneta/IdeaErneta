import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';
function Item({ props }) {
    console.log("item", props)
    return (
        <div>
            <div class="card">
                <img class="img" src={'https://http2.mlstatic.com/' + props.imageId} alt={props.title} />
                <h1><NavLink to={`/item/${props.id}`} exact> {props.title}</NavLink></h1><br />
                <p class="price">$ {props.price}</p><br />
                <p>{props.description}</p><br />
                <p><button>Agregar al carrito</button></p>
            </div>
        </div >
    )
}

export default Item
