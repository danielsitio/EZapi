import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Endpoints from '../components/endpoints/Endpoints'
import Project from '../components/project/Project'
import {useState} from 'react'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub} from "@fortawesome/free-brands-svg-icons";

let copia,endpoints_names,endpoints_methods,endpoints
export default function Home() {

  const [preferences, setPreferences] = useState({
    name:"demo",
    language:"js",
    cors:false,
    db:"",
    endpoints:[]
  })
  const [canGenerate, setCanGenerate] = useState(true)
  const [generate, setGenerate] = useState("GENERATE")
  function handleSubmit(e){
    if (canGenerate){
    setCanGenerate(false)
    setGenerate("GENERATING...")
    copia=JSON.parse(JSON.stringify(preferences))
    if(document.getElementById("name").value!==""){
      copia.name=document.getElementById("name").value
    }
    else{
      copia.name="demo"
    }
    
    copia.db=document.getElementById("db").value
    endpoints_names=Array.from(document.getElementsByClassName("endpoint_text_input__3roj2"))
    endpoints_methods=Array.from(document.getElementsByClassName("endpoint_select__bwCHN"))

    endpoints=[]
    for (let i = 0; i < endpoints_names.length; i++) {
      alert
      endpoints.push({name:endpoints_names[i].value,method:endpoints_methods[i].value })
    }
    copia.endpoints=endpoints;
    setPreferences(copia)

    /*enviar "copia" a la api para que construya el proyecto"*/
    fetch('https://builder-final.herokuapp.com/api',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(copia)
    })
    .then(transfer=>transfer.blob())
    .then(file=>{
      let elm = document.createElement('a'); 
      elm.href = URL.createObjectURL(file);  
      elm.setAttribute('download', copia.name+".zip"); 
      elm.click()
      setGenerate("GENERATE")
      setCanGenerate(true)
    })
  }

  
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
        <a href="https://github.com/danielsitio/EZapi" target="_blank" rel="noreferrer"><FontAwesomeIcon className={styles.github} icon={faGithub}/></a>
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
              <button  className={styles.button_generate} onClick={handleSubmit}>{generate}</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
