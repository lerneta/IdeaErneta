import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';


const products = [{ id: 1, name: 'Termómetro' }, { id: 2, name: 'Termómetro' }];

const ItemDetailContainer = () => {
    const { id } = useParams({});
    const [items, setItems] = useState({});
    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                products ? resolve(products) : reject("error 404");
                console.log('Getitems', products);
            }, 2000);

        });
        getItems.then((resolve) => {
            setItems(resolve.filter(item => item.id === id))
        })
        console.log('container', items);

    }, [id]);
    return (
        <div class="container">
            <ItemDetail item={items} />
        </div>
    )
}
export default ItemDetailContainer;