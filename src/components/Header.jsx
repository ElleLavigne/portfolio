import Styles from "./Header.module.css"
import logo from '../assets/logo.svg'
export function Header() {
  return (
    <>
      <header className={Styles.header}>
        <img src={logo} alt="" />
        <div className={Styles.navLink}>
          <a href="#">Work</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
      </header>
    </>
  )
}
