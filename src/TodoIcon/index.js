import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import './TodoIcon.css';

const iconTypes = {
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
} /*Renderizar el tipo de ícono que queremos mostrar*/

function TodoIcon({ type, color, onClick }) {
    return (
        <span
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick} 
        > {/*Permite insertar dinámicamente la clase Icon-check ó Icon-delete*/}
            {iconTypes[type](color)} {/*Llamar de iconTypes el tipo de objeto en específico que estemos recibiendo*/} 
        </span>
    )
}

export { TodoIcon };