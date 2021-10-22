import { Wheel } from "react-custom-roulette"
import useStyles from "./style"

const data = [
  { option: "Bob", style: { backgroundColor: "green", textColor: "black" } },
  { option: "James", style: { backgroundColor: "white", textColor: "black" } },
  { option: "Lisa" },
]

export const RouletteBoard = () => {
  const styles = useStyles()
  return (
    <div className={styles.root}>
      <Wheel
        mustStartSpinning={true}
        prizeNumber={3}
        data={data}
        backgroundColors={["#3e3e3e", "#df3428"]}
        textColors={["#ffffff"]}
      />
    </div>
  )
}
