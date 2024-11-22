import { Animation } from "../../components/Animation"
import styles from "./About.module.css"
import { CONFIG } from "../../static/config.js"

export function About() {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Olá, Me chamo Izaelle Lavigne, sou desenvolvedora front-end e UI UX Design.
          </h1>
          <p className={styles.text}>
          Desenvolvedora front-end e design UI/UX, com foco na criação de interfaces digitais intuitivas e de alto desempenho. 
          Possuo domínio em React.js, JavaScript, TypeScript, CSS, SCSS, Tailwind CSS e ferramentas modernas, como Vite e Styled-components. 
          Tenho experiência em integração de APIs e nas principais plataformas de design, incluindo Figma, Adobe e Framer, 
          atuando em todas as etapas do processo, desde a concepção visual até a prototipagem, com o objetivo de entregar soluções consistentes e 
          otimizadas para os usuários.
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
