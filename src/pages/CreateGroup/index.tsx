import { Grid, Button, Input, Typography, TextField } from "@material-ui/core"
import useStyles from "./style"
import { useCreate } from "../../hooks/Group/useCreate"

export const CreateGroup = () => {
  const { ref, error, loading, create } = useCreate()

  const styles = useStyles()
  return (
    <div>
      {error.has("main") && <Typography color="error">{error.get("main")}</Typography>}
      <Grid container spacing={2} className={styles.root}>
        <Grid item xs={12}>
          <h1>グループ新規作成</h1>
          <TextField
            type="text"
            placeholder="グループ名"
            className={styles.groupname}
            inputRef={ref.nameRef}
            error={error.has("name")}
            helperText={error.has("name") ? error.get("name") : ""}
          />
          <br />
          <TextField
            type="text"
            placeholder="Slackのwebhook"
            className={styles.slackurl}
            inputRef={ref.slackUrlRef}
            error={error.has("slackurl")}
            helperText={error.has("slackurl") ? error.get("slackurl") : ""}
          />
          <br />
          <br />
          <Button variant="contained" size="large" onClick={create} className={styles.submit} disabled={loading}>
          {loading ? "作成中です..." : "グループ作成"}
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
