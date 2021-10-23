import { VFC } from "react"
import { Outlet } from "react-router-dom"

export const SimpleLayout: VFC = () => {
  return (
    <div>
      <p>Layout</p>
      <Outlet />
    </div>
  )
}
