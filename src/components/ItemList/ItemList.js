import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ props }) {


    return (
        <div class="flex">
            {props.map(u => <Item id={u.id} producto={u.nombre} precio={u.precio} descripcion={u.descripcion} url={u.img} />)}
        </div>
    )
}

export default ItemList
