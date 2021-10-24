import { Grid, Paper, Typography, Box, Button } from "@material-ui/core"
import { useEffect } from "react"
import { useGroupQuery } from "../../utils/graphql/generated"
import useStyles from "./style"

export const JoinGroup = () => {
  const { data, error } = useGroupQuery()

  useEffect(() => {
    console.log(error)
  }, [error])

  const styles = useStyles()
  return (
    <div>
      <Box textAlign="center" m={3}>
        <Typography variant="h4">グループに参加</Typography>
      </Box>
      <Grid container spacing={2} className={styles.root}>
        {data?.group.map((groupdata) => (
          <Grid item xs={3}>
            <Paper elevation={1} className={styles.item}>
              <Box p={2}>
                <Typography variant="h5">{groupdata.name}</Typography>
                <Button variant="contained" size="large" href={`/${groupdata.id}`} className={styles.submit}>
                  グループ参加
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
