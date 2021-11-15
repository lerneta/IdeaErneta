import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
const products = [
    { id: '1', name: 'Temporizador', price: 1500, stock: 25, description: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_935880-MLA44091055445_112020-F.jpg' },
    { id: '2', name: 'Termohigrómetro', price: 550, stock: 25, description: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_754680-MLA44811062293_022021-F.webp' },
    { id: '3', name: 'Difusor', price: 530, stock: 25, description: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_652786-MLA45538600602_042021-F.webp' }
]



const ItemDetailContainer = () => {
    const { id } = useParams();

    const [detail, setDetail] = useState('');

    useEffect(() => {
        const getItems = new Promise((resolve, reject) => {
            setTimeout(() => {
                products ? resolve(products.filter(item => item.id === id)) : reject("error 404");
            }, 2000);
        });
        getItems.then((resolve) => {
            console.log('Getitems', resolve);
            setDetail(<ItemDetail item={resolve} />)
        })
    }, [id]);


    return (
        <div class="container">
            {detail}
        </div>
    )
}
export default ItemDetailContainer;