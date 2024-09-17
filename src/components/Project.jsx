import { Animation } from "./Animation"
import styles from "./Project.module.css"
export function Project({ title, subtitle, description, thumb, links = []}) {
  return (
    <>
      <Animation>
        <article className={styles.project}>
          <div className={styles.contentText}>
            <h3 className={styles.title}>{title}</h3>

            <h4 className={styles.subtitle}>{subtitle}</h4>
            <p className={styles.description}>{description}</p>
            {links.map((link) => {
              return (
                <a key={link.href} href={link.href}>
                  {link.text}
                </a>
              )
            })}
          </div>

          <div className={styles.thumb}>
            <img src={thumb} alt="" />
          </div>
        </article>
      </Animation>
    </>
  )
}
