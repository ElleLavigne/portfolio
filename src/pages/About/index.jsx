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
          Front-end Developer and UI/UX Design specialist, I focus on creating high-performance, 
          intuitive digital interfaces, combining technical skills with aesthetic vision to deliver exceptional solutions. 
          I have advanced proficiency in React.js, JavaScript, TypeScript, CSS, and SCSS, 
          along with expertise in modern development tools such as Vite and Styled-components. 
          Experienced with Figma, Adobe, and Framer, I handle everything from visual conception to advanced prototyping, 
          ensuring consistent and optimized experiences for end users.
          </p>

          {/* <div className={styles.mainSoftware}>
            <strong>Main Software </strong> <p>Adobe, Figma and Framer</p>
          </div>

          <div className={styles.mainSkill}>
            <strong>Main Skills </strong>{" "}
            <p>ReactJS | Design Research, Design Thinking.</p>
          </div> */}

        </div>

        <img className={styles.profile} src="/profile.png" alt="" />
      </div>
      <div className={styles.contact}>
        <h3>
          Let's talk about your <br />
          next project
          <img src="/arrow.svg" alt="" />
        </h3>
        <a className={styles.email} href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a>
        
      </div>
    </>
  )
}
