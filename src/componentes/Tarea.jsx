import React from 'react';
import '../css/tarea.css';
import { BsFillTrashFill } from 'react-icons/bs';

function Tarea({ texto, completada }) {
    return(
        <div className={`tarea__contenedor ${completada ? 'tarea__completada' : ''}`}>
            <div className='tarea__texto'>
                {texto}
            </div>
            <div className='tarea__contenedor-iconos'>
                <BsFillTrashFill className='tarea__icono' />
            </div>
        </div>
    );
}

export default Tarea;