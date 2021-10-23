import { Grid, TextField, Button } from "@material-ui/core"
import useStyle from "./style"

export const JoinGroup = () => {
  const styles = useStyle()
  return (
    <div>
      <Grid container spacing={2} className={styles.root}>
        <Grid item xs={12}>
          <h1>グループに参加</h1>
          <TextField type="text" placeholder="グループ名" className={styles.groupname} />
          <br />
          <br />
          <Button variant="contained" size="large" className={styles.submit}>
            参加する
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
