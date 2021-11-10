import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({ greeting }) => {
    const producto = [
        { nombre: 'Temporizador', precio: 1500, descripcion: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_935880-MLA44091055445_112020-F.jpg' },
        { nombre: 'Termohigrómetro', precio: 550, descripcion: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_754680-MLA44811062293_022021-F.webp' },
        { nombre: 'Difusor', precio: 530, descripcion: 'Descripcion', img: 'https://http2.mlstatic.com/D_NQ_NP_2X_652786-MLA45538600602_042021-F.webp' }
    ]


    const task = new Promise((resolve, reject) => {
        const condition = true
        if (condition) {
            setTimeout(() => {
                resolve(producto);
            }, 2000)
        } else {
            reject('404 not found')
        };
    });

    task.then(result => {
        console.log(result);
    })

    return (
        <div>
            <br />
            <ItemList props={producto} />
            <ItemCount stock={5} initial={1} />
        </div>
    )
}

export default ItemListContainer

