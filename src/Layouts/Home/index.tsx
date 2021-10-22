import { Outlet } from "react-router-dom"
import { HomeHeader } from "../../components/HomeHeader"

export const HomeLayout = () => {
  return (
    <div>
      <HomeHeader />
      <Outlet />
    </div>
  )
}
