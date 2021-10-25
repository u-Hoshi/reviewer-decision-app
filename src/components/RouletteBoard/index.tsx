import { Button } from "@material-ui/core"
import { useEffect, useState, VFC } from "react"
import { Wheel } from "react-custom-roulette"
import { WheelData } from "react-custom-roulette/dist/components/Wheel/types"
import { useUpdate } from "../../hooks/User/useUpdate"
import { useUserByGroupIdQuery } from "../../utils/graphql/generated"
import useStyles from "./style"

// queryを入れる
const data: WheelData[] = []

export const RouletteBoard: VFC = () => {
  const { update, groupId, error, loading } = useUpdate()
  window.onload = update
  console.log(groupId)

  // queryを入れる
  const { data: userData } = useUserByGroupIdQuery({
    variables: {
      _eq: groupId,
    },
  })

  const randomColor = () => {
    const colorArray = ["#009900", "#ffff66", "#ff9900", "#ff6600"]
    return colorArray[Math.floor(Math.random() * colorArray.length)]
  }

  useEffect(() => {
    userData?.users.map((user) => {
      data.push({ option: user.name, style: { backgroundColor: randomColor(), textColor: "black" } })
    })
  }, [userData])

  const styles = useStyles()
  const [mustSpin, setMustSpin] = useState(false) // スタート
  const [prizeNumber, setPrizeNumber] = useState(0) //該当者

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length)
    setPrizeNumber(newPrizeNumber)
    setMustSpin(true)
  }
  return (
    <div className={styles.root}>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
        onStopSpinning={() => {
          setMustSpin(false)
        }}
      />
      <Button
        onClick={handleSpinClick}
        style={{
          backgroundColor: "#FFA06B",
        }}
      >
        ルーレットスタート
      </Button>
    </div>
  )
}
