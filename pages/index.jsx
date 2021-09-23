import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Endpoints from '../components/Endpoints'
import Project from '../components/Project'

export default function Home() {

  function handleSubmit(e){
    e.preventDefault()
    alert("se apreto el boton submit")
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
        <div className={styles.git}>GITHUB</div>
        <div className={styles.light}>LIGHT</div>
      </header>
      <hr/>
      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <div className={styles.form_wraper}>

          <div className={styles.project}>
            <Project/>
          </div>

          <div  className={styles.endpoints}>
            <Endpoints/>
          </div>

          <div className={styles.actions}>
            <div className={styles.actions_container}>
              <button  className={styles.button_generate} type="submit">GENERATE</button>
            </div>
          </div>

        </div>
      </form>
    </div>
  )
}
