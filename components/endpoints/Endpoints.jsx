import {useState} from 'react'
import Endpoint from '../endpoint/Endpoint'
import styles from './endpoints.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import ReactCSSTransitionGroup  from 'react-addons-css-transition-group';

let a=0
export default function Endpoints() {

    

    const [endpoints, setEndpoints]=useState([])

    function addEndpoint(){
        a=a+1
        setEndpoints([...endpoints,{id:a,name:"",method:"GET"}])
    }
    function deleteEndpoint(id){
        let newEndpoints=endpoints.filter((endpoint)=>endpoint.id!==id)
        setEndpoints(newEndpoints)
    }

    return (
        <div className={styles.endpoints_container}>    
            <div className={styles.endpoints_header}>
                <label className={styles.endpoints_label}>Endpoints</label>
                <FontAwesomeIcon className={styles.endpoints_button} icon={faPlusSquare} onClick={addEndpoint}/>
            </div>
            
            <ul className={styles.endpoints_list}>
                <ReactCSSTransitionGroup transitionAppear={true} transitionAppearTimeout={300} transitionEnterTimeout={300} transitionLeaveTimeout={300} transitionName={styles}>
                {
                    endpoints.length==0 ? <div className={styles.no_endpoints}>No endpoints added</div> :  endpoints.map((endpoint)=>
                        <li key={endpoint.id} className={styles.endpoints_item}>
                            <Endpoint endpoint={endpoint}  deleteEndpoint={deleteEndpoint}/>
                        </li>
                        ) 
                }
                </ReactCSSTransitionGroup>
            </ul>
        </div>
    )
}