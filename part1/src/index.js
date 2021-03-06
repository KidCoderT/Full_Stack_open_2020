import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [votes, setVotes] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 })
  const [selected, setSelected] = useState(0)

  const GetHighestVotedAncedotesIndex = () => {
    let index = 0
    for (let i = 0; i < 6; i++) {
      if (votes[i] > votes[index]) {
        index = i
      }
    }
    return index
  }

  const VoteForAncedote = () => {
    let newDict = {...votes}
    newDict[selected]++
    setVotes(newDict)
  }

  const GetRandomAncedote = () => {
    setSelected(Math.floor((Math.random() * props.anecdotes.length)))
  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      <div>{props.anecdotes[selected]}</div>
      <div>has {votes[selected]} votes</div>
      <button onClick={() => VoteForAncedote()}>vote</button>
      <button onClick={() => GetRandomAncedote()}>next ancedots</button>
      <h1>Anecdote with most votes</h1>
      <div>{props.anecdotes[GetHighestVotedAncedotesIndex()]}</div>
      <div>has {votes[GetHighestVotedAncedotesIndex()]} votes</div>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)