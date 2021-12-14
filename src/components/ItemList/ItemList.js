import React from 'react';
import './ItemList.css';
import Item from '../Item/Item';

function ItemList({ props }) {

    console.log("props", props);


    return (
        <div class="flex">
            {props.map(u => <Item props={u} />)}
        </div>
    )
}

export default ItemList
