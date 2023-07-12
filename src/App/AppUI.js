import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    finishTodo,
    deleteTodo,
}) {

    return (
        <>
    
          <TodoCounter 
          completed={completedTodos} 
          total={totalTodos}/>
          <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
             /> {/*Envío de las props*/}
    
          <TodoList>

            {loading && <p>Estamos cargando...</p>}
            {error && <p>Desespérate, hubo un error!!</p>}
            {(!loading && searchedTodos.length === 0) && <p>¡Crea tu primer TODO!</p>}

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
    
          <CreateTodoButton />
        </>
    );
}

export { AppUI };
