import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {
    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const onSubmit=(event) => {
        event.preventDefault(); //Evita el comportamiento por defecto del formulario para que no se recargue la página al pulsar los botones
        addTodo(newTodoValue); //Función en estado local para guardar la información del nuevo Todo ingresado por el usuario
        setOpenModal(false); //Cierra el formulario al pulsar Añadir
    }; 
    //Al dar click al botón Añadir se conecta al contexto global de la aplicación para enviar el nuevo valor (Nuevo Todo) a través de la función addTodo

    const onCancel = () => {
        setOpenModal(false); //Cierra el formulario al pulsar Cancelar
    }; 

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }; //

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo TODO</label>
            <textarea
                placeholder="Nueva tarea"
                value={newTodoValue}
                onChange={onChange}
            />
            <div className='TodoForm-buttonContainer'>
                <button
                    className='TodoForm-button 
                    TodoForm-button--cancel'
                    onClick={onCancel}
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