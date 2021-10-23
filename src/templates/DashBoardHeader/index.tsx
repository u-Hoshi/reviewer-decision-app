import { AppBar, Avatar, Toolbar, IconButton } from "@material-ui/core"
import { useState, VFC } from "react"
import { HeaderMenu } from "../../Layouts/HeaderMenu"
import { Logo } from "../Logo"

import useStyles from "./style"

export const DashBoardHeader: VFC = () => {
  const styles = useStyles()
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  // TODO anyを外す
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget)
  }

  return (
    <>
      <AppBar color="default" elevation={0}>
        <Toolbar>
          <div className={styles.logo}>
            <Logo />
          </div>
          <IconButton
            aria-expanded={open ? "true" : undefined}
            className={styles.profileIcon}
            onClick={(event) => handleClick(event)}
          >
            <Avatar />
          </IconButton>
        </Toolbar>
      </AppBar>
      <HeaderMenu anchorEl={anchorEl} setAnchorEl={setAnchorEl} />
    </>
  )
}
