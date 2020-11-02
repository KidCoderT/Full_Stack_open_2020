import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const Statistic = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

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
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Statistic text="good" value={props.good} />
          <Statistic text="neutral" value={props.neutral} />
          <Statistic text="bad" value={props.bad} />
          <Statistic text="all" value={props.all} />
          <Statistic text="average" value={props.average} />
          <Statistic text="positive" value={`${props.positive} %`} />
        </tbody>
      </table>
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

      <Button handleClick={IncrementGood()} text="good" />
      <Button handleClick={IncrementNeutral()} text="neutral" />
      <Button handleClick={IncrementBad()} text="bad" />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={GetAverage()} positive={GetPositivePercent()} />
    </div>
  )
 }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
