import React from 'react';
import { AppUI } from './AppUI';
//import { useLocalStorage } from './useLocalStorage';
import { TodoProvider } from '../TodoContext';


function App() {



  return (
    <TodoProvider>
      <AppUI
      /*
        loading={loading}
        error={error}
        completedTodos={completedTodos}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchedTodos={searchedTodos}
        finishTodo={finishTodo}
        deleteTodo={deleteTodo}
      */

      />
    </TodoProvider>
  );


}


export default App;
