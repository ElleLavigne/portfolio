import { Project } from '../Project'
import styles from './Projects.module.css'

export function Projects(){
  return (
    <>
      <div className={styles.projects}>
      
          <Project
            title={"Adopt Pet"}
            subtitle={
              "Adopt Pet was created to help people find new pets quickly and easily."
            }
            description={
              "Its interface was designed to be simple and intuitive so that people of different profiles could easily access it."
            }
            thumb={"/thumbAdoptPet.png"}
            links={[
              {
                href: "https://www.figma.com/design/t6yhAPPTDSIMBWjjY9p1Ue/Adopt-Pet?node-id=81-123&t=T0m4wl2yQ4lZAZGz-1",
                text: "Figma",
              },
            ]}
          />
      
        {/* ___________________________________ */}
        <Project
          title={"Lossi - ecommerce"}
          subtitle={
            "This is a version of how I would do my first ecommerce today"
          }
          description={
            "This new design was designed to bring modernity and minimalism. The choice of neutral colors brings calm and modernity."
          }
          thumb={"/thumbLossi.png"}
          links={[
            {
              href: "https://www.figma.com/design/roqn3atXPog3oBranyeBoa/Remaking-%7C-Lossi?node-id=93-122&t=ebEAB6LVmsu0IHcE-1",
              text: "Figma",
            },
          ]}
        />

        {/* ___________________________________ */}
        <Project
          title={"Norte Contabilidade - Site Institucional"}
          subtitle={
            "Website designed to present an accounting firm and facilitate communication."
          }
          description={"Website for accounting firm"}
          thumb={"/thumbNorteContabilidade.png"}
          links={[
            {
              href: "https://www.figma.com/design/HCNiAIUGQkddUT3wCZsUYn/Norte-Cont%C3%A1bil?node-id=156-8&t=yqdljo1AeS32l6OF-1",
              text: "Figma",
            },
            {
              href: "https://github.com/ElleLavigne/Norte-Contabilidade",
              text: "Github",
            },
          ]}
        />
      </div>
    </>
  )
}