import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Endpoints from '../components/endpoints/Endpoints'
import Project from '../components/project/Project'
import {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

let copia
export default function Home() {

  const [preferences, setPreferences] = useState({
    name:"",
    language:"js",
    cors:false,
    db:"",
    endpoints:[]
  })

  function handleSubmit(e){
   
    copia=JSON.parse(JSON.stringify(preferences))
    copia.name=document.getElementById("name").value
    copia.db=document.getElementById("db").value
    setPreferences(copia)
    alert(JSON.stringify(preferences))
    e.preventDefault()
  }

  return (

    <div className={styles.container}>
      <Head>
        <title>EZ Api</title>
        <meta name="description" content="An even easier way to create an api using JavaScript or Python.All the structure and config ready to use." />
      </Head>
      <header id={styles.header}>
        <h1 className={styles.title}>
          EZ API
        </h1>
        <div className={styles.filler}/>
        <a href=""><FontAwesomeIcon className={styles.github} icon={faGithub}/></a>
      </header>
      <hr/>
      <form  className={styles.form} autoComplete="off">
        <div className={styles.form_wraper}>

          <div className={styles.project}>
            <Project setPreferences={setPreferences} actualPreferences={preferences} />
          </div>

          <div  className={styles.endpoints}>
            <Endpoints/>
          </div>

          <div className={styles.actions}>
            <div className={styles.actions_container}>
              <button  className={styles.button_generate} onClick={handleSubmit}>GENERATE</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
