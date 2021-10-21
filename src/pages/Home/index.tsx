import { Button, Grid } from "@material-ui/core";

export const Home = () => {
  return (
    <div>
      <Grid container spacing={2}>
        <h1>レビュワーアプリ</h1>
        <p>このアプリは、レビュワーを自動的に決めるアプリです。</p>
        <Button variant="contained" href="/login">
          ログイン
        </Button>
        <Button variant="contained" href="/signup">
          新規登録
        </Button>
      </Grid>
    </div>
  );
};
