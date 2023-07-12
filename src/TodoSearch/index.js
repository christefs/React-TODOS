import React from 'react';
import './TodoSearch.css';

function TodoSearch({
  searchValue,
  setSearchValue,
/*Recibe las props desde App.js*/
}) {
  
    return (
      <input 
      placeholder="Preparar ingredientes"
      className='TodoSearch'
      value={searchValue} /*Para conectar el valor del input con el estado inicial de la aplicación*/
      onChange={(event) => {
        /*console.log('Escribiste en el TodoSearch');*/
        setSearchValue(event.target.value); /*Guardar en función actualizadora de estado el valor ingresado en el input y así se guarde permanentemente en el estado de ReactJS*/
        
      }} />
    );
  }

  export { TodoSearch };