import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {

    return (
        <div>
            <br />
            <ItemList />
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer

