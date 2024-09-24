import { Outlet } from "react-router-dom"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Section/Footer"

export function DefaultLayout() {
  return (
    <>
      <div className={"container"}>
        <Header />
        <Outlet />
        <Footer/>
      </div>
    </>
  )
}
