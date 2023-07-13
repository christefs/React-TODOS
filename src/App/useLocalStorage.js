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

  /*
const defaultTodos = [
  { text: 'Preparar el almuerzo', completed: true },
  { text: 'Tomar el curso de Intro a React.js', completed: false},
  { text: 'Llorar con la llorona', completed: false},
  { text: 'Ir al cine', completed: false},
  { text: 'Salir a tomar cerveza con los amigos', completed: false},
  { text: 'Usar estados derivados', completed: true},
  
];*/
//const stringifiedTodos = JSON.stringify(defaultTodos)
//localStorage.setItem('TODOS_V1', stringifiedTodos)
//+++Con las sentencias anteriores se pueden definir con Local Storage, los eventos iniciales de la Aplicación haciendo uso de la consola del inspector del navegador


//localStorage.setItem('TODOS_V1', defaultTodos); 
//localStorage.removeItem('TODOS_V1');