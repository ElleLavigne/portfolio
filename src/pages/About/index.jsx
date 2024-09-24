import { Animation } from "../../components/Animation"
import styles from "./About.module.css"
import { CONFIG } from "../../static/config.js"

export function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Hello, I'm Izaelle Lavigne, UI UX Design front-end developer
          </h1>
          <p className={styles.text}>
            My work is specialized in interface design and front-end
            development. With a solid experience in creating digital solutions,
            integrated design and technology to deliver functional and
            aesthetically defined products. Expert in JavaScript and React.
          </p>
          <div className={styles.mainSoftware}>
            <strong>Main Software </strong> <p>Adobe, Figma and Framer</p>
          </div>

          <div className={styles.mainSkill}>
            <strong>Main Skills </strong>{" "}
            <p>ReactJS | Design Research, Design Thinking.</p>
          </div>
        </div>

        <img className={styles.profile} src="/profile.png" alt="" />
      </div>
      <div className={styles.contact}>
        <h3>
          Let's talk about your <br />
          next project
          <img src="/arrow.svg" alt="" />
        </h3>
        <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
        
      </div>
    </>
  )
}
