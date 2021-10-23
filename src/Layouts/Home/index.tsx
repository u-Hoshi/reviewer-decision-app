import { VFC } from "react"
import { Outlet } from "react-router-dom"
import { HomeHeader } from "../../components/HomeHeader"

export const HomeLayout: VFC = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  )
}
