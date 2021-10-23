import { useEffect, useRef, useState } from "react"
import { useNavigate } from "react-router"
import { useInsertGroupMutation } from "../../../utils/graphql/generated"
import { SetErrorFn, useCreateHelper } from "../useCreateHelper"

export const useCreate = () => {
  const nameRef = useRef<HTMLInputElement>(null)
  const slackUrlRef = useRef<HTMLInputElement>(null)

  const navigate = useNavigate()

  const [insertMutation, { error: apolloError }] = useInsertGroupMutation()

  const formValidation = (setError: SetErrorFn) => {
    let invalidValidation = false

    // Nameフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!nameRef.current?.value) {
      setError("name", "名前が入力されていません。")
      invalidValidation = true
    }

    // Emailフォームのバリデーションチェック
    // 今回はシンプルにするために、入力が空でないかだけ確認する
    if (!slackUrlRef.current?.value) {
      setError("slackurl", "SlackのURLを入力してください。")
      invalidValidation = true
    }

    // バリデーションが有効か無効化を返す
    return invalidValidation
  }

  const create = async () => {
    if (!nameRef.current?.value || !slackUrlRef.current?.value) {
      // エラー処理を入れる
      return
    }

    const apolloResponse = await insertMutation({
      variables: {
        name: nameRef.current.value,
        slackUrl: slackUrlRef.current.value,
        responsible_id: 1,
      },
    })

    if (apolloResponse.data?.insert_group_one?.id) {
        
      navigate(`/${apolloResponse.data?.insert_group_one.id}`)
    } else {
      throw new Error("グループ新規作成に失敗しました。")
    }
  }

  const { createExecute, error, setErrorHandler, loading } = useCreateHelper(create, formValidation)

  useEffect(() => {
    if (apolloError?.message) {
      setErrorHandler("main", apolloError.message)
    }
  }, [apolloError])

  return {
    ref: {
      nameRef,
      slackUrlRef,
    },
    create: createExecute,
    error,
    loading,
  }
}
