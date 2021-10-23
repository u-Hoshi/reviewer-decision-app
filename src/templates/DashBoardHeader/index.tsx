import { AppBar, Avatar, Toolbar, IconButton } from "@material-ui/core"
import { VFC } from "react"
import { Logo } from "../Logo"

import useStyles from "./style"

export const DashBoardHeader: VFC = () => {
  const styles = useStyles()
  return (
    <>
      <AppBar color="default" elevation={0}>
        <Toolbar>
          <div className={styles.logo}>
            <Logo />
          </div>
          <IconButton className={styles.profileIcon}>
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  )
}
