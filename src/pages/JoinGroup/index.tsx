import { Grid, Paper, Typography, Chip, Box } from "@material-ui/core"

export const JoinGroup = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>グループに参加</h1>
          <Paper elevation={1}>
            <Box p={2}>
              <Typography variant="h5">タイトル</Typography>
              <Box textAlign="right" pt={1}>
                <Chip label="参加する" color="secondary" />
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
