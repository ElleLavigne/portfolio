import styles from './Headline.module.css'
import Arrow from '../assets/iconArrow.svg'
import { Animation } from './Animation'
// import { fadeInUp } from "react-animations"
export function Headline(){
  return (
    <>
      {/* <Animation> */}
        <div className={styles.headline}>
          <div className={styles.text}>
            <h1>
              Hello, I'm Izaelle <br />
              Lavigne.
            </h1>

            <p>
              I am a UI UX designer and front-end <br />
              developer.
            </p>
          </div>

          <img className={styles.arrow} src={Arrow} alt="" />
        </div>
      {/* </Animation> */}
    </>
  )

} 