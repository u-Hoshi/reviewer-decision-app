import { MenuItem, Menu, styled } from "@material-ui/core"
import { Dispatch, SetStateAction, VFC } from "react"
import { useNavigate } from "react-router-dom"

type HeaderMenuType = {
  anchorEl: null
  setAnchorEl: Dispatch<SetStateAction<null>>
}

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(5),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
  },
}))

export const HeaderMenu: VFC<HeaderMenuType> = ({ anchorEl, setAnchorEl }) => {
  const navigate = useNavigate()
  const open = Boolean(anchorEl)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const onClickItem = (item: string) => {
    navigate(item)
  }
  return (
    <StyledMenu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
      }}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <MenuItem onClick={() => onClickItem("/group/create")}>新規グループを作成</MenuItem>
      <MenuItem onClick={() => onClickItem("/group/join")}>新規グループに加入</MenuItem>
      {/* <MenuItem>参加中のグループ</MenuItem> */}
      <MenuItem onClick={() => onClickItem("/profile")}>プロフィール</MenuItem>
      <MenuItem onClick={() => onClickItem("/signout")}>ログアウト</MenuItem>
    </StyledMenu>
  )
}
