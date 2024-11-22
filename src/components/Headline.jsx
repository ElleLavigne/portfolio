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
            <span>
             Olá, me chamo Izaelle
              Lavigne.
            </span>

            <p>
              Sou uma desenvolvedora front-end e UI UX designer.
            </p>
          </div>

          <img className={styles.arrow} src={Arrow} alt="" />
        </div>
      {/* </Animation> */}
    </>
  )

} 