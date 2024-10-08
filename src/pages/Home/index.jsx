// import { Header } from "../../components/Header";
import styles from './Home.module.css'
import { Headline } from '../../components/Headline'
import { Projects } from '../../components/Section/Projects'
import { Footer } from '../../components/Section/Footer'
export function Home(){
  return (
    <>
     
        <div className={styles.tools}>
          <div className={styles.tool}>figma</div>
          <div className={styles.tool}>Adobe</div>
          <div className={styles.separator}></div>
          <div className={styles.tool}>React</div>
          <div className={styles.tool}>JavaScript</div>
          <div className={styles.tool}>TypeScript</div>
          <div className={styles.tool}>SCSS</div>
          <div className={styles.tool}>CSS</div>
          <div className={styles.tool}>html</div>
        </div>
     
      <Headline />
      <Projects />
      {/* <Footer/> */}
    </>
  )
}