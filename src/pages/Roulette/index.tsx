import { RouletteBoard } from "../../components/RouletteBoard"
import { Button, Grid, TextField } from "@material-ui/core"
import useStyles from "./style"
import { VFC } from "react"

export const Roulette: VFC = () => {
  const styles = useStyles()
  return (
    <div>
      <Grid container spacing={2} className={styles.root}>
        <Grid item sm={6} className={styles.board}>
          <RouletteBoard />
        </Grid>
        <Grid container direction="column" justify="center" sm={6}>
          <TextField id="outlined-basic" label="プルリクのリンク" variant="outlined" style={{ marginBottom: "30px" }} />
          <TextField
            id="outlined-basic"
            label="コメント"
            variant="outlined"
            multiline
            rows={4}
            style={{ marginBottom: "30px" }}
          />
          <Button color="primary" variant="contained" style={{ width: "200px", margin: "0 auto" }}>
            送信
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}
