import React from 'react';
import './TodoForm.css';

function TodoForm() {
    return (
        <form onSubmit={(event) => {
            event.preventDefault(); //Evita el comportamiento por defecto del formulario para que no se recargue la página al pulsar los botones
        }}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Nueva tarea"
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button 
                    TodoForm-button--cancel'
                >Cancelar</button>
                <button
                    className='TodoForm-button 
                    TodoForm-button--add'
                >Añadir</button>
            </div>
        </form>
    );
}

export { TodoForm };