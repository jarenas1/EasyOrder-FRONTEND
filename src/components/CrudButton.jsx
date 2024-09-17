import { useState } from "react";
import { TableMesas } from "./TableMesas";
import { TableProducts } from "./TableProducts";
import { TableWaiters } from "./TableWaiters";

export const CrudButton = () => {
    const [selected, setSelected] = useState('mesas'); // Estado para almacenar el botón seleccionado

    const selectedButton = (event) => {
        const buttonId = event.target.id; // ID del botón clickeado
        const buttons = document.querySelectorAll('.button-left, .button-center, .button-right');
        
        buttons.forEach((button) => {
            button.classList.remove('selected-btn');
        });
        
        event.target.classList.add('selected-btn');
        setSelected(buttonId); // Cambia el estado con el ID del botón seleccionado
    };

    return (
        <>
            <article>
                <p onClick={selectedButton} id='mesas' className='button-left selected-btn'>Mesas</p>
                <p onClick={selectedButton} id='productos' className='button-center'>Productos</p>
                <p onClick={selectedButton} id='meseros' className='button-right'>Meseros</p>
            </article>
                {/* Renderiza el componente TableMesas si 'mesas' está seleccionado */}
                {selected === "mesas" && <TableMesas />}
                {selected === "productos" && <TableProducts />}
                {selected === "meseros" && <TableWaiters />}

        </>
    );
};
