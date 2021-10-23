import { useRef, useState } from "react"
import { useInsertGroupMutation } from "../../../utils/graphql/generated"

export const useCreate = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const slackUrlRef = useRef<HTMLInputElement>(null)

    const [error, setError] = useState<Error>()

    const [loading, setLoading] = useState<boolean>(false)

    const [insertMutation, {error: apploError}] = useInsertGroupMutation()

    const create = async () => {
        if(
            !nameRef.current?.value ||
            !slackUrlRef.current?.value
        ) {
            // エラー処理を入れる
            return
        }

        try {
            setLoading(true)

            const apolloResponse = await insertMutation({
                variables: {
                    name: nameRef.current.value,
                    slackUrl: slackUrlRef.current.value,
                    responsible_id: 1
                }
            })
            if(apolloResponse.data?.insert_group_one?.id){
                // リダイレクト
            } else {
                throw new Error("グループ新規作成に失敗しました。")
            }
        } catch(error) {
            setError(error)
        } finally {
            setLoading(false)
        }

        return {
            ref: {
                nameRef,
                slackUrlRef
            },
            create,
            error,
            loading
        }
    }
}
