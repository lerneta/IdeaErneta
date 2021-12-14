import React from 'react';
import './Item.css';
import { NavLink } from 'react-router-dom';
function Item({ props }) {
    console.log("item", props)
    return (
        <div>
            <div class="card">
                <img class="img" src={'https://http2.mlstatic.com/' + props.imageId} alt={props.title} />
                <h1>{props.title}</h1><br />
                <p class="price">$ {props.price}</p><br />
                <p>{props.description}</p><br />
                <NavLink to={`/item/${props.id}`} exact> <p><button>Ver producto</button></p></NavLink>
            </div>
        </div >
    )
}

export default Item
