import { useState } from "react"

const Counter = ({ 
  init = 0,
  min = -Infinity,
  max = Infinity,
  upgrade = 1
}) => {

  const [counter, setCounter] = useState(init);

  const handleClickPlus = () => {
    if (counter < max) {
      setCounter(counter + upgrade);
    }
  }

  const handleClickMinus = () => {
    if (counter > min) {
      setCounter(counter - upgrade);
    }
  }

  const handleClickReset = () => {
    setCounter(init);
  }

  return (
    <div>
      <div>
        <h2>Counter</h2>
        <p>{counter}</p>
        <button onClick={handleClickMinus}>-{upgrade}</button>
        <button onClick={handleClickReset}>Reset</button>
        <button onClick={handleClickPlus}>+{upgrade}</button>
      </div>
    </div>
  )
}

export default Counter