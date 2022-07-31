import React from 'react';
import '../css/formulario.css';
import { BsFillTrashFill } from 'react-icons/bs';

function Formulario(props) {
    return(
        <form>
            <input className='tarea__input' type='text' placeholder='Escribe una tarea' name='texto'/>
            <button className='tarea__boton'>
                Agregar tarea
            </button>
        </form>
    );
}

export default Formulario;