import React, { useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';

function ListaDeTareas() {
    const [tarea, setTarea] = useState([]);
    const agregarTarea = (input) => {
        setTarea(tarea.push(input));
    };

    return(
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tarea__lista'>
                {
                    tarea.map((tarea) =>
                        <Tarea texto={tarea.tarea}
                        completada={tarea.completada}/>
                    )
                }
            </div>
        </>
    );
}

export default ListaDeTareas;