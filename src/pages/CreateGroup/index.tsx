import { Grid, Button, Input } from "@material-ui/core"

export const CreateGroup = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>グループ新規作成</h1>
          <Input type="text" placeholder="グループ名" />
          <br />
          <Input type="text" placeholder="Slackのwebhook" />
          <br />
          <br />
          <Button variant="contained" size="large" href="/signup">
            グループ作成
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
