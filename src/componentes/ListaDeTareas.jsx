import React, { useEffect, useState } from 'react';
import Formulario from './Formulario';
import Tarea from './Tarea';
import Swal from 'sweetalert2'

function ListaDeTareas() {

    // Obtener las tareas del local storage y mostrarlo en pantalla.
    const getLocaltext = () => {
        let lista = localStorage.getItem('text');
        if (lista) {
            return JSON.parse(localStorage.getItem('text'));
        } else {
            return []
        }
    }

    const [tarea, setTarea] = useState(getLocaltext);

    const agregarTarea = actividad => {
        // Condicional verifica que no exista tareas vacias agregadas. 
        // Luego agrega la nueva actividad al inicio del arreglo y los valores anteriores se irán al final del arreglo.
        // Actualizar el estado.
        if(actividad.texto.trim()) {
            actividad.texto = actividad.texto.trim();
            
            const tareasActualizadas = [actividad, ...tarea];
            setTarea(tareasActualizadas);
        }else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se puede agregar una tarea vacia.'
            }
            )
        }
    };

    useEffect(() => {
        localStorage.setItem('text', JSON.stringify(tarea))
    }, [tarea]);

    const eliminarTarea = id => {
        // Recorre el array creando un nuevo array sin agregar la tarea que coincida con el id.
        Swal.fire({
            title: '¿Estas seguro de eliminar la tarea?',
            text: "Tus cambios no podrán ser revertidos",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminalo',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {                
            const tareasActualizadas = tarea.filter(actividad => actividad.id !== id);
            setTarea(tareasActualizadas);
              Swal.fire(
                'Eliminado!',
                'Tu tarea fue eliminada exitosamente.',
                'success'
              )
            }
          })
    };

    const completarTarea = id => {
        const tareasActualizadas = tarea.map(actividad => {
            if(actividad.id === id) {
                actividad.completada = !actividad.completada;
            }
            return actividad;
        });
        setTarea(tareasActualizadas);
    };

    return(
        <>
            <Formulario onSubmit={agregarTarea}/>
            <div className='tarea__lista'>
                {
                    tarea.map((actividad) => <Tarea key={actividad.id} id={actividad.id} texto={actividad.texto} completada={actividad.completada} eliminarTarea={eliminarTarea} completarTarea={completarTarea}/>)
                }
            </div>
        </>
    );
}

export default ListaDeTareas;