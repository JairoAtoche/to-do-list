import React from 'react';
import '../css/tarea.css';
import { BsFillTrashFill } from 'react-icons/bs';

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
    return(
        <div className={`tarea__contenedor ${completada ? 'tarea__completada' : ''}`}>
            <div className='tarea__texto' onClick={() => completarTarea(id)}>
                {texto}
            </div>
            <div className='tarea__contenedor-iconos' onClick={() => eliminarTarea(id)}>
                <BsFillTrashFill className='tarea__icono' />
            </div>
        </div>
    );
}

export default Tarea;