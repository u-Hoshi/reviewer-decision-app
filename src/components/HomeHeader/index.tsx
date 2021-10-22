import { AppBar, Toolbar } from "@material-ui/core"
import { Logo } from "../../templates/Logo"

import useStyles from "./style"

export const HomeHeader = () => {
  const styles = useStyles()
  return (
    <AppBar color="default">
      <Toolbar>
        <div className={styles.logo}>
          <Logo />
        </div>
      </Toolbar>
    </AppBar>
  )
}
