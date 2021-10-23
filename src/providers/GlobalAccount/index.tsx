import { useEffect, PropsWithChildren, ReactNode, VFC } from "react"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { GlobalUser } from "../../stores/User"
import { useUserByIdLazyQuery } from "../../utils/graphql/generated"
import { AuthCredential } from "../../stores/AuthCredential"
import { AuthCredentialLoaded } from "../../stores/AuthCredentialLoaded"
import { AccountLoaded } from "../../stores/AccountLoaded"

// eslint-disable-next-line @typescript-eslint/ban-types
export const GlobalAccout = ({ children }: PropsWithChildren<{}>) => {
  const [userQuery, { data: apolloData, error: apolloError, loading: apolloLoding }] = useUserByIdLazyQuery()
  const [globalUser, setGlobalUser] = useRecoilState(GlobalUser)
  const credential = useRecoilValue(AuthCredential)
  const authLoaded = useRecoilValue(AuthCredentialLoaded)

  // Accountのローディング状態を管理
  const setAccountLoaded = useSetRecoilState(AccountLoaded)

  useEffect(() => {
    // Authenticationのローディング終わっており
    if (authLoaded) {
      // credentialにIDが格納されており
      if (credential) {
        // Apollo Clientがローディング中で、ユーザー情報を未取得であれば
        if (!apolloLoding && !globalUser?.id) {
          // ユーザー情報の取得開始
          setAccountLoaded(false)
          userQuery({ variables: { id: credential } })
        }
      } else {
        if (globalUser?.id) {
          setGlobalUser(undefined)
        }
      }
    }
  }, [credential, authLoaded])

  useEffect(() => {
    if (authLoaded && !apolloLoding) {
      if (apolloData?.users_by_pk?.id) {
        setGlobalUser(apolloData.users_by_pk)
      } else {
        if (globalUser?.id) {
          setGlobalUser(undefined)
        }
      }
      setAccountLoaded(true)
    }
  }, [authLoaded, apolloData])

  useEffect(() => {
    if (apolloError?.message) {
      console.error(apolloError?.message)
      setGlobalUser(undefined)
    }
  }, [apolloError])

  return <>{children}</>
}
