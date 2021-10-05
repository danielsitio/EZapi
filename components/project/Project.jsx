
import styles from './project.module.css'

let copia
export default function Project({setPreferences,actualPreferences}) {

    function chooseLanguage(language){
        copia=JSON.parse(JSON.stringify(actualPreferences))
        copia.language=language
        setPreferences(copia)
    }

    function changeCors(){
        copia=JSON.parse(JSON.stringify(actualPreferences))
        copia.cors=!copia.cors
        setPreferences(copia)
    }

    function selectDB(e){
        
        copia=JSON.parse(JSON.stringify(actualPreferences))
        copia.db=e.target.value
        setPreferences(copia)
    }

    return (
        <div className={styles.project_container}>
            <div className={styles.basics}>
                <div className={styles.project_name}>
                    <label className={styles.label} >Project</label>
                    <div className={styles.name_container}><input id="name" type="text"  className={styles.input} placeholder="Name"/></div>
                </div>
                <div className={styles.language}>
                    <label className={styles.label} >Language</label>
                    <div>
                        <p><input className={styles.radio_input} name="language" type="radio" onClick={()=>chooseLanguage("js")} defaultChecked/>JavaScript</p>
                        <p><input className={styles.radio_input} name="language" type="radio" onClick={()=>chooseLanguage("py")}/>Python</p>
                    </div>
                </div>
            </div>
                <div className={styles.options}>
                <div className={styles.db}>
                    <label className={styles.label}> DB </label>
                    <select id="db" className={styles.select_db} onChange={selectDB}>
                        <option className={styles.option} value="">none</option>
                        <option className={styles.option}value="MySql">MySql</option>
                    </select>
                </div>
                <div className={styles.cors}>
                    <label className={styles.label}>CORS</label>
                    <input className={styles.check_cors} type="checkbox" onClick={changeCors}/>
                </div>
            </div>
        </div>
    )
}
