import React from 'react';
import { useLocalStorage } from '../App/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
    const {
        item: todos, 
        saveItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      const [searchValue, setSearchValue] = React.useState(''); /*Define valor inicial de la aplicación*/
      const [openModal, setOpenModal] = React.useState(true);

      const completedTodos = todos.filter(todo => !!todo.completed).length;
      const totalTodos = todos.length;
    
      
    
      const searchedTodos = todos.filter(
        (todo) => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        } 
      ); /*Estado derivado a partir del estado de todos para que filtre y devuelva coincidencias que incluyan en alguna parte el texto del estado searchValue. De esta manera al escribir una porción de texto en
       la entrada, se desplegarán solo los todos que coincidan con el texto ingresado y sin discriminar mayúsculas de minúsculas.*/
    
       
    
      const finishTodo = (text) => {
        const newTodos = [...todos]; /*Crea una copia del array todos*/
        const todoIndex = newTodos.findIndex( /*Para encontrar en la copia del array  el índice del todo que tenga el texto en particular*/
          (todo) => todo.text === text /*Recibir cada todo con una propiedad .text que cuando sea igual al texto recibido en la función finishTodo se identifique para obtener su índice y marcarlo como completado
          y enviar la nueva lista de todos al actualizador setTodos  */
        );
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      };
    
      const deleteTodo = (text) => {
        const newTodos = [...todos]; /*Crea una copia del array todos*/
        const todoIndex = newTodos.findIndex( /*Para encontrar en la copia del array  el índice del todo que tenga el texto en particular*/
          (todo) => todo.text === text /*Recibir cada todo con una propiedad .text que cuando sea igual al texto recibido en la función deleteTodo se identifique para obtener su índice y marcarlo como completado
          y enviar la nueva lista de todos al actualizador setTodos  */
        );
        newTodos.splice(todoIndex, 1); /*Método para eliminar el elemento seleccionado, se le indica el índice del array y la cantidad de elementos*/
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            searchedTodos,
            finishTodo,
            deleteTodo,
            openModal,
            setOpenModal,
        }}>
            {children}
        </TodoContext.Provider>
    )
}


export { TodoContext, TodoProvider };


