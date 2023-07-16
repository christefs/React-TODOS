import React from 'react';

import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosLoading} from '../TodosLoading';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { CreateTodoButton } from '../CreateTodoButton';

import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import { TodoContext } from '../TodoContext';

function AppUI() {

  const {
    loading,
    error,
    searchedTodos,
    finishTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

    return (
        <>
    
          <TodoCounter />
          <TodoSearch /> {/*Envío de las props*/}
    
          
              <TodoList>

              {loading && <TodosLoading />}
              {error && <TodosError />}
              {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

              {searchedTodos.map(todo => (
                <TodoItem 
                  key={todo.text} 
                  text={todo.text}
                  completed={todo.completed}
                  onComplete={() => finishTodo(todo.text)} /*Propiedad que llama a una función que actualice un estado en particular como completado*/
                  onDelete={() => deleteTodo(todo.text)}
                /> /*Se renderizan los todos a partir del estado derivado searchedTodos*/
      
              ))}
              
            </TodoList>
            
    
          <CreateTodoButton 
            setOpenModal = {setOpenModal}/>
8
          {openModal && (
            <Modal>
              <TodoForm />
            </Modal>
          ) }
        </>
    );
}

export { AppUI };
