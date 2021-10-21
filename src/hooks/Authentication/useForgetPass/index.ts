import { ErrorState } from "./../useAuthHelper/index"
// import { useForgetPass } from './index'
import { useRef, useState, VFC } from "react"
import { SetErrorFn, useAuthHelper } from "../useAuthHelper"
import { forgetPass } from "../../../utils/Firebase/forget"

type useForgetPassType = {
  ref: {
    emailRef: React.RefObject<HTMLInputElement>
  }
  loading: boolean
  error: Map<ErrorState, string>
  sendEmail: () => Promise<void>
  sendSuccess: boolean
}

export const useForgetPass = (): useForgetPassType => {
  const emailRef = useRef<HTMLInputElement>(null)

  const [sendSuccess, setSendSuccess] = useState(false)

  const formValidation = (setError: SetErrorFn) => {
    if (!emailRef.current?.value) {
      setError("email", "メールアドレスを入力してください。")
      return true
    }

    return false
  }

  const sendEmail = async () => {
    await forgetPass(emailRef.current?.value || "")
    setSendSuccess(true)
  }

  const { authExecute, error, loading } = useAuthHelper(sendEmail, formValidation)

  return {
    ref: {
      emailRef,
    },
    loading,
    error,
    sendEmail: authExecute,
    sendSuccess,
  }
}
