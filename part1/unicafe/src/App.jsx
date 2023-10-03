import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const updateGood = () => { setGood(good + 1) }
  const updateNeutral = () => { setNeutral(neutral + 1) }
  const updateBad = () => { setBad(bad + 1) }


  return (
    <div>
      <h1>Give feedback</h1>
      <Button name='Good' handleClick={updateGood} />
      <Button name='Neutral' handleClick={updateNeutral} />
      <Button name='Bad' handleClick={updateBad} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App