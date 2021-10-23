import { Button, Grid } from "@material-ui/core"
import { VFC } from "react"
import useStyles from "./style"

export const Home: VFC = () => {
  const styles = useStyles()
  return (
    <div>
      <Grid container spacing={2} className={styles.root}>
        <Grid item xs={12}>
          <h1>レビュワーアプリ</h1>
          <p>このアプリは、レビュワーを自動的に決めるアプリです。</p>
          <Button variant="contained" size="large" href="/login" className={styles.loginBtn}>
            ログイン
          </Button>
          <br />
          <br />
          <Button variant="contained" size="large" href="/signup" className={styles.signupBtn}>
            新規登録
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
