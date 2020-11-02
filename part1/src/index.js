import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  if (props.all === 0) {
    return (
      <>
        No feedback given
      </>
    )
  }
  
  return (
    <>
      <div>good {props.good}</div>
      <div>neutral {props.neutral}</div>
      <div>bad {props.bad}</div>
      <div>all {props.all}</div>
      <div>average {props.average}</div >
      <div>positive {props.positive} %</div>
    </>
  )
}

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
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={GetAverage()} positive={GetPositivePercent()} />
    </div>
  )
 }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
