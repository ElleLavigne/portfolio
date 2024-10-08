import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { About } from "./pages/About"
export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
      </Route>
    </Routes>
  )
}
