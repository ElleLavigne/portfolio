import { Project } from '../Project'
import styles from './Projects.module.css'

export function Projects(){
  return (
    <>
      <div className={styles.projects}>
        <Project
          title={"Adopt Pet | App"}
         
          description={
            "Em processo: Um projeto elaborado para facilitar o meio de adoção trazendo elementos que facilitam a busca de um animal por meio da possibilidade de achar um animal mais próximo de você, poder filtrar espécie, gênero e idade, design pensado para ser flúido e simples facilitando o fluxo. Design das telas criado no Figma."
          }
          thumb={"/thumbAdoptPet.png"}
          links={[
            {
              href: "https://www.figma.com/design/t6yhAPPTDSIMBWjjY9p1Ue/Adopt-Pet?node-id=81-123&t=T0m4wl2yQ4lZAZGz-1",
              text: "Figma",
            },
            {
              href: "https://medium.com/@izaelleavrillavigne/estudo-de-caso-ui-ux-adopt-pet-8b0b057c64bd",
              text: "Estudo de caso",
            },
          ]}
        />

        {/* ___________________________________ */}
        <Project
          title={"Lossi | Ecommerce"}
          
          description={
            "Lossi é uma marca fictícia de cosméticos que criei para aprimorar minhas técnicas de design. O e-commerce foi desenvolvido com o propósito de ser simples e minimalista, trazendo sofisticação ao layout. Para isso, utilizei uma paleta de cores neutras, componentes de grande destaque e margens reduzidas, proporcionando um visual moderno. O design foi inteiramente elaborado no Figma."
          }
          thumb={"/thumbLossi.png"}
          links={[
            {
              href: "https://www.figma.com/design/roqn3atXPog3oBranyeBoa/Remaking-%7C-Lossi?node-id=93-122&t=ebEAB6LVmsu0IHcE-1",
              text: "Projeto no Figma",
            },
          ]}
        />

        {/* ___________________________________ */}
        <Project
          title={"Norte Contabilidade - Site Institucional"}
         
          description={
            "Design criado no figma, programado em React.js."
          }
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
            {
              href: "https://norte-contabilidade.vercel.app/",
              text: "Visualizar na web",
            },
          ]}
        />
        {/* ___________________________________ */}
        <Project
          title={"E-commerce  - Genz"}
          description={
            "Design moderno e minimalista, criado no figma. Progamado em react utilizando tailwind"
          }
          thumb={"/thumbEcommerce.png"}
          links={[
            {
              href: "https://github.com/ElleLavigne/ecommerce-genz",
              text: "Github",
            },
            {
              href: "https://www.figma.com/design/KROdgyQuIrfoRxMt4z7ETm/Ecommerce?node-id=156-130&t=z1maW9NWPklUJdFX-1",
              text: "Figma",
            },
            {
              href: "https://ecommerce-genz.vercel.app/",
              text: "Visualizar na Web",
            },
          ]}
        />
        
        <Project
          title={"Timer Pomodoro"}
          description={"Um timer Pomodoro simples, desenvolvido em React, que permite ao usuário gerenciar sessões de foco e pausas, seguindo a técnica Pomodoro para aumentar a produtividade."}
          thumb={"/thumbIgniteTimer.png"}
          links={[
            {
              href: "https://github.com/ElleLavigne/ignite-timer",
              text: "Github",
            },
          ]}
        />
        {/* ___________________________________ */}


        <Project
          title={"Dashboard | DT-Money"}
          description={
            "Uma aplicação web focada em consumo e integração de APIs, construída com React."
          }
          thumb={"/thumb-dt-money.png"}
          links={[
            {
              href: "https://github.com/ElleLavigne/03-dt-money",
              text: "Github",
            },
           
           
          ]}
        />
        <Project
          title={"To Do - Rocketseat"}
          subtitle={"To-Do List Application"}
          description={
            "A React and TypeScript project focused on API integration, dynamic routing, and responsive design, using Axios for data handling and Vite for optimized performance."
          }
          thumb={"/thumbToDo.png"}
          links={[
            {
              href: "https://github.com/ElleLavigne/to-do-list",
              text: "Github",
            },
          ]}
        />
        <Project
          title={"Dashboard | Pizza Shop"}
          description={
            "Em processo: Uma aplicação web focada em consumo e integração de APIs, construída com React, estilizada com Tailwind e ShadCN-UI. O projeto utiliza Docker para simplificar o ambiente de desenvolvimento e deploy, garantindo escalabilidade e consistência. Ideal para demonstrar expertise em integrações e construção de interfaces modernas e responsivas."
          }
          thumb={"/pizza-shop-ignite-thumb.png"}
          links={[
            {
              href: "https://github.com/ElleLavigne/pizzashop-web",
              text: "Github",
            },
          ]}
        />
        
      </div>
    </>
  )
}