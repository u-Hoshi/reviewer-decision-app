import { Button } from "@material-ui/core"
import { useState, VFC } from "react"
import { Wheel } from "react-custom-roulette"
import { useUpdate } from "../../hooks/User/useUpdate"
import useStyles from "./style"

// queryを入れる
const data = [
  { option: "Bob", style: { backgroundColor: "green", textColor: "black" } },
  { option: "James", style: { backgroundColor: "white", textColor: "black" } },
  { option: "Lisa" },
]

export const RouletteBoard: VFC = () => {
  const { update, error, loading } = useUpdate()
  window.onload = update

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
