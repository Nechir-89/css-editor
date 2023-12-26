// import Image from 'next/image'
import Editor from './components/Editor/Editor'
import Viewer from './components/Viewer/Viewer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.wraper}>
        <h1 className={styles.title}>App Name</h1>
        {/* comp 01: viewer */}
        <Viewer />
        {/* comp 02: css code editor */}
        <Editor />
      </div>
    </main>
  )
}
