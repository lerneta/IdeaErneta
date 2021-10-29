import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({ stock, initial, onAdd }) {

    const [cantidad, setcantidad] = useState(initial);

    const sumaritem = () => {
        if (cantidad < stock) {
            const suma = cantidad + 1;
            setcantidad(suma);
        }
    }

    const restitem = () => {
        if (cantidad > initial) {
            const resta = cantidad - 1;
            setcantidad(resta);
        }
    }
    const agregar = () => {
        onAdd = cantidad;
        alert(`Agregaste ${onAdd} productos`);
    }



    return (
        <div>
            <div class="cuadro">
                <p>Producto seleccionado</p>
                <br />
                <input type="button" value="-" onClick={restitem} />
                <input type="text" value={cantidad} disabled />
                <input type="button" value="+" onClick={sumaritem} />
                <br />

                <input type="button" value="Agregar" class="agregar" onClick={agregar} />
            </div>


        </div>
    )
}

export default ItemCount
