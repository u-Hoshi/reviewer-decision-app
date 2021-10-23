import { VFC } from "react"
import useStyles from "./style"

export const Profile: VFC = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>プロフィール画面</h2>
      <table className={styles.column}>
        <tr>
          <td>名前</td>
          <td>サンプル</td>
        </tr>
        <tr>
          <td>email</td>
          <td>sample@sample.com</td>
        </tr>
      </table>
    </div>
  )
}
