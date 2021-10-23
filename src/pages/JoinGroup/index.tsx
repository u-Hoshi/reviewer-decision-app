import { Grid, TextField, Button } from "@material-ui/core"

export const JoinGroup = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>グループに参加</h1>
          <TextField type="text" placeholder="グループ名" />
          <br />
          <br />
          <Button variant="contained" size="large">
            参加する
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
