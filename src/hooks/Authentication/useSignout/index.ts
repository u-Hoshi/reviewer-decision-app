import { useNavigate } from "react-router-dom"
import { signout as fireSignout } from "../../../utils/Firebase/signout"

type useSignoutType = {
  signout: () => Promise<void>
}

export const useSignout = (): useSignoutType => {
  const navigate = useNavigate()

  const signout = async () => {
    await fireSignout()
    navigate("/")
  }

  return {
    signout,
  }
}
