import React, { useState } from 'react';
import '../css/formulario.css';
import { v4 as uuidov4 } from 'uuid';

function Formulario(props) {
    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
    }
    const manejarEnvio = e => {
        e.preventDefault();

        const tareaNueva = {
            id: uuidov4(),
            texto: input,
            completada: false
        };
        props.onSubmit(tareaNueva);
    };
    
    return(
        <form onSubmit={manejarEnvio} className='form'>
            <input className='tarea__input' type='text' placeholder='Escribe una tarea' name='texto' onChange={manejarCambio}/>
            <button className='tarea__boton'>
                Agregar tarea
            </button>
        </form>
    );
}

export default Formulario;