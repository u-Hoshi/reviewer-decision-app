import { useEffect, PropsWithChildren } from "react"
import { useSetRecoilState } from "recoil"
import { auth } from "../../utils/Firebase/config"
import { AuthCredential } from "../../stores/AuthCredential"
import { AuthCredentialLoaded } from "../../stores/AuthCredentialLoaded"

// eslint-disable-next-line @typescript-eslint/ban-types
export const AuthStateListener = ({ children }: PropsWithChildren<{}>) => {
  const setCredential = useSetRecoilState(AuthCredential)
  const setLoaded = useSetRecoilState(AuthCredentialLoaded)

  useEffect(() => {
    const unsubscriber = auth.onAuthStateChanged(async (credential) => {
      setCredential(credential?.uid || undefined)
      setLoaded(true)
    })
    return unsubscriber
  })

  return <>{children}</>
}
