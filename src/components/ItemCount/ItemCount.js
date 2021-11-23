import React, { useState } from 'react'
import './ItemCount.css'
import { CartContext, useCartContext } from '../../Context/CartContext';
function ItemCount({ stock, initial, onAdd }) {

    const [cantidad, setcantidad] = useState(initial);
    const { configcantidad } = useCartContext(CartContext);


    const sumaritem = () => {
        if (cantidad < stock) {
            const suma = cantidad + 1;
            setcantidad(suma);
            configcantidad(cantidad);

        }
    }

    const restitem = () => {
        if (cantidad > initial) {
            const resta = cantidad - 1;
            setcantidad(resta);
            configcantidad(cantidad);
        }
    }
    const agregar = () => {
        onAdd = cantidad;
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


            </div>


        </div>
    )
}

export default ItemCount
