import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
    

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
      
          let parsedItem;
          if (!localStorageItem) {
            localStorage.setItem('TODOS_V1', JSON.stringify([initialValue]));
            parsedItem = initialValue;
          }else {
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
          } /*Con este condicional, si se eliminan todos los elementos del almacenamiento local (Local Storage), impide que la aplicación se rompa al recargar y devuelve un array vacío */
  
          setLoading(false);
        } catch (error) {
          setLoading(false); //En caso de error detiene el proceso de carga
          setError(true);
        }
      }, 2000); //Ejecuta las sentencias internas después de 2 segundos sólo la primera vez que carga la aplicación. 
      
      
    }); //Genera estado de carga para la aplicación
  
    
    const saveItem = (newItem) => {
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }; /*Se utiliza para guardar los estados de los Todos para que al recargar o inicializar nuevamente la aplicación se cargue con los últimos cambios*/
    return {
      item, 
      saveItem,
      loading,
      error
    };
  }

  export { useLocalStorage };