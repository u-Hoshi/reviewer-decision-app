import { makeStyles } from "@material-ui/core"

export default makeStyles({
  root: {
    marginTop: "7%",
    textAlign: "center",
  },
  loginBtn: {
    margin: "1% 0",
    backgroundColor: "#6F86FF",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#6376DB",
    },
  },
  signupBtn: {
    margin: "1% 0",
    backgroundColor: "#FFA06B",
    color: "#FFFFFF",
    "&:hover": {
      backgroundColor: "#E18F61",
    },
  },
})
