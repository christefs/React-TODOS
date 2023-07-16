import './CreateTodoButton.css';

function CreateTodoButton({ setOpenModal }) {
    return (
        <button className='CreateTodoButton'
        onClick={() => {
            setOpenModal(state => !state);
        }
            /*
            (event) => {
                console.log('Diste un click al botón')
                console.log(event)
                console.log(event.target)
            }*/
        }>+</button>
    );
}

export { CreateTodoButton };