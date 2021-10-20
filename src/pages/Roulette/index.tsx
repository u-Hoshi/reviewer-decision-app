import { RouletteBoard } from "../../components/RouletteBoard";
import { Grid } from "@material-ui/core";
import useStyles from "./style";

export const Roulette = () => {
  const styles = useStyles();
  return (
    <div>
      <Grid container spacing={2} className={styles.root}>
        <Grid item sm={6} className={styles.board}>
          <RouletteBoard />
        </Grid>
        <Grid item sm={6}>
          入力するとこ
        </Grid>
      </Grid>
    </div>
  );
};
