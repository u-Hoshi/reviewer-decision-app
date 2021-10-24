import {
  Button,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@material-ui/core"
import { VFC } from "react"
import { useGroupMemberQuery } from "../../utils/graphql/generated"
import { useParams } from "react-router-dom"
import { userInfo } from "os"
import moment from "moment"

function createData(name: string, email: string, created_at: string) {
  return { name, email, created_at }
}

const rows = [
  createData("Frozen yoghurt", "hoge@sample.com", "2021-10-18"),
  createData("Ice cream sandwich", "foo@sample.com", "2021-10-18"),
]

export const GroupMember: VFC = () => {
  const { group } = useParams()
  const groupId = parseInt(group)
  const data = useGroupMemberQuery({
    variables: {
      _eq: groupId,
    },
  })
  const rows2 = data.data?.users.map((userInfo) => createData(userInfo.name, userInfo.email, userInfo.created_at))
  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: "650px" }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>名前</TableCell>
            <TableCell align="center">メールアドレス</TableCell>
            <TableCell align="center">登録日</TableCell>
            <TableCell align="center">役割変更</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows2?.map((row) => (
            <TableRow key={row.name} style={{}}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.email}</TableCell>
              <TableCell align="center">{row.created_at}</TableCell>
              <TableCell align="center">
                <Button>変更</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
