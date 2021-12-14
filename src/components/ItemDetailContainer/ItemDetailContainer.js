import React, { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore } from "../../firebase/firebase";



const ItemDetailContainer = () => {
    const { detailId } = useParams();
    const [detail, setDetail] = useState('');


    useEffect(() => {
        getItems(detailId).then((resultado) => {
            console.log("resutado", resultado.data())
            if (resultado.exists) {
                setDetail(<ItemDetail id={detailId} item={resultado.data()} />)
                console.log("detalle", resultado.data())
            }
        });
        return;
    }, [detailId]);



    const getItems = (id) => {
        const db = getFirestore();
        const itemsCollection = db.collection("items");
        const item = itemsCollection.doc(id);
        console.log('firebase', item);
        return item.get();

    };

    return (
        <div class="container">
            {detail}
        </div>
    )
}
export default ItemDetailContainer;