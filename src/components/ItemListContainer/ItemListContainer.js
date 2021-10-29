import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemListContainer = ({ greeting }) => {





    return (
        <div>
            {greeting}
            <br />
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer

