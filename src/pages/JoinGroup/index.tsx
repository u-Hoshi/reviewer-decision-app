import { Grid, Paper, Typography, Chip, Box, Button } from "@material-ui/core"
import useStyles from "./style"

export const JoinGroup = () => {
  const styles = useStyles()
  return (
    <div>
      <Box textAlign="center" m={3}>
        <Typography variant="h4">グループに参加</Typography>
      </Box>
      <Grid container spacing={2} className={styles.root}>
        <Grid item xs={3}>
          <Paper elevation={1} className={styles.item}>
            <Box p={2}>
              <Typography variant="h5">タイトル</Typography>
              <Button variant="contained" size="large" className={styles.submit}>
                グループ参加
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}
