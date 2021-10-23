import { VFC } from "react"
import { Outlet } from "react-router-dom"
import { DashBoardHeader } from "../../templates/DashBoardHeader"
import useStyles from "./style"

export const GroupLayout: VFC = () => {
  const styles = useStyles()
  return (
    <>
      <DashBoardHeader />
      <div className={styles.main}>
        <Outlet />
      </div>
    </>
  )
}
