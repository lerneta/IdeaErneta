import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function ItemDetail({ item }) {


    console.log({ item });
    return (
        <div>

            <ItemCount stock={5} initial={1} />

        </div>
    )
}

export default ItemDetail