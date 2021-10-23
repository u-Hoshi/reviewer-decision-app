import { AppBar, Toolbar } from "@material-ui/core"
import { VFC } from "react"
import { Logo } from "../../templates/Logo"

import useStyles from "./style"

export const HomeHeader: VFC = () => {
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
