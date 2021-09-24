import styles from './endpoint.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { layer } from '@fortawesome/fontawesome-svg-core';

export default function Endpoint({endpoint,deleteEndpoint}) {

    function keyDownHandler(tecla){

    }

    return (
        <div className={styles.endpoint}>
            <input type="text" className={styles.text_input} onKeyDown={keyDownHandler}  placeholder="Endpoint name"/>
            <div className={styles.filler}/>
            <select className={styles.select}>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="DELETE">DELETE</option>
            </select>
            <FontAwesomeIcon className={styles.delete} icon={faTrashAlt} onClick={()=>deleteEndpoint(endpoint.id)}/>
        </div>
    )
}
