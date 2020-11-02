import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const IncrementGood = () => () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const IncrementNeutral = () => () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const IncrementBad = () => () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const GetAverage = () => (good + 0 + bad * -1)/all

  const GetPositivePercent = () => good/all * 100

  return (
    <div>
      <h1>give feedback</h1>

      <button onClick={IncrementGood()}>good</button>
      <button onClick={IncrementNeutral()}>neutral</button>
      <button onClick={IncrementBad()}>bad</button>

      <h1>statistics</h1>

      <div>good {good}</div>
      <div>neutral {neutral}</div>
      <div>bad {bad}</div>
      <div>all {all}</div>
      <div>average {GetAverage()}</div>
      <div>positive {GetPositivePercent()} %</div>
    </div>
  )
 }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
