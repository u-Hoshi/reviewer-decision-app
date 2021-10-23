import { VFC } from "react"
import { useRecoilValue } from "recoil"
import { GlobalUser } from "../../stores/User"
import useStyles from "./style"

export const Profile: VFC = () => {
  const styles = useStyles()
  const globalUser = useRecoilValue(GlobalUser)

  return (
    <div className={styles.root}>
      <h2 className={styles.title}>プロフィール画面</h2>
      <table className={styles.column}>
        <tr>
          <td>名前</td>
          <td>{globalUser?.name}</td>
        </tr>
        <tr>
          <td>email</td>
          <td>{globalUser?.email}</td>
        </tr>
      </table>
    </div>
  )
}
