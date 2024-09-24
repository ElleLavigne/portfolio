import Styles from "./Header.module.css"
import logo from '../assets/logo.svg'
import { NavLink } from "react-router-dom"
export function Header() {
  return (
    <>
      <header className={Styles.header}>
        <img src={logo} alt="" />
        <div className={Styles.navLink}>
         <NavLink to="/">Work</NavLink>
         <NavLink to="/about">About</NavLink>
          {/* <a href="#">Contact</a> */}
        </div>
      </header>
    </>
  )
}
