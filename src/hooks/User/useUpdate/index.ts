import { useEffect } from "react"
import { useRecoilValue } from "recoil"
import { GlobalUser } from "../../../stores/User"
import { useUpdateUserByPkMutation } from "../../../utils/graphql/generated"
import { SetErrorFn, useUserHelper } from "../useUserHelper"

export const useUpdate = () => {
  const urlArray = window.location.href.split("/")
  const groupId = parseInt(urlArray[urlArray.length-1])

  const globalUser = useRecoilValue(GlobalUser)

  const [updateMutation, { error: apolloError }] = useUpdateUserByPkMutation()

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false

    // idが入っているかチェック
    if (!globalUser?.id) {
      setError("id", "ログインしてません")
      invalidValidation = true
    }

    return invalidValidation
  }

  const update = async () => {
    // idが入っているかチェック
    if (!globalUser?.id) {
      // エラー処理を入れる
      return
    }

    const apolloResponse = await updateMutation({
      variables: {
        // group_idをセット
        id: globalUser.id,
        group_id: groupId,
      },
    })

    if (!apolloResponse.data?.update_users_by_pk?.id) {
      throw new Error("グループ参加に失敗しました。")
    }
  }

  const { userExecute, error, setErrorHandler, loading } = useUserHelper(update, formValidation)

  useEffect(() => {
    if (apolloError?.message) {
      setErrorHandler("main", apolloError.message)
    }
  }, [apolloError])

  return {
    update: userExecute,
    groupId,
    error,
    loading,
  }
}
