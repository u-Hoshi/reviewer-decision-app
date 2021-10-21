import { AppBar, Avatar, Toolbar, IconButton } from "@material-ui/core"
import { Logo } from "../Logo"

import useStyles from "./style"

export const DashBoardHeader = () => {
  const styles = useStyles()
  return (
    <AppBar color="default">
      <Toolbar>
        <div className={styles.logo}>
          <Logo />
        </div>
        <IconButton className={styles.profileIcon}>
          <Avatar />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
