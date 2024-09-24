import styles from "./Footer.module.css"
import { CONFIG } from "../../static/config.js"
export function Footer() {
  return (
    <>
      <footer>
        <nav className={styles.socialMedia}>
          <a
            className={styles.link}
            href="https://github.com/ElleLavigne"
            target="_blank"
          >
            Github
          </a>
          <a
            className={styles.link}
            href="www.linkedin.com/in/izaelle-lavigne-18a62427a"
            target="_blank"
          >
            LinkedIn
          </a>
          <a className={styles.link} href={`mailto:${CONFIG.email}`}>
            Gmail
          </a>
        </nav>

        <nav className={styles.skill}>
          <img src={"/figma.svg"} alt="" />
          <img src={"/react.svg"} alt="" />
          <img src={"/css.svg"} alt="" />
          <img src={"/javascript.svg"} alt="" />
          <img src={"/html.svg"} alt="" />
        </nav>
      </footer>
    </>
  )
}
