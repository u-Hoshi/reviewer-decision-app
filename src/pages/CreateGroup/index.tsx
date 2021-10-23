import { Grid, Button, Input } from "@material-ui/core"
import useStyles from "./style"

export const CreateGroup = () => {
  const styles = useStyles()
  return (
    <div>
      <Grid container spacing={2} className={styles.root}>
        <Grid item xs={12}>
          <h1>グループ新規作成</h1>
          <Input type="text" placeholder="グループ名" className={styles.groupname} />
          <br />
          <Input type="text" placeholder="Slackのwebhook" className={styles.slackurl}/>
          <br />
          <br />
          <Button variant="contained" size="large" href="/signup" className={styles.submit}>
            グループ作成
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
