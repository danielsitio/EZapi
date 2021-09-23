import { func } from 'prop-types'
import styles from './project.module.css'

export default function Project() {

    function chooseLanguage(){
        
    }



    return (
        <div className={styles.project_container}>
            <div className={styles.basics}>
                <div className={styles.project_name}>
                    <label className={styles.label} >Project</label>
                    <div className={styles.name_container}><input type="text"  className={styles.input} placeholder="Name"/></div>
                </div>
                <div className={styles.language}>
                    <label className={styles.label} >Language</label>
                    <div>
                        <p><input className={styles.radio_input} name="language" type="radio" onClick={chooseLanguage}/>JavaScript</p>
                        <p><input className={styles.radio_input} name="language" type="radio" onClick={chooseLanguage}/>Python</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
