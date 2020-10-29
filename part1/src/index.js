import React, { useState } from 'react'
import ReactDOM from 'react-dom'

// This is the Ex Code and I will uncomment them once I start doing the Ex files again
// const Header = (props) => {
//   return (
//     <h1>{props.course.name}</h1>
//   )
// }

// const Part = (props) => {
//   return (
//     <>
//       <p>
//         {props.part} {props.exercises}
//       </p>
//     </>
//   )
// }

// const Content = (props) => {
//   return (
//     <>
//       <Part part={props.parts[0].name} exercises={props.parts[0].exercises} />
//       <Part part={props.parts[1].name} exercises={props.parts[1].exercises} />
//       <Part part={props.parts[2].name} exercises={props.parts[2].exercises} />
//     </>
//   )
// }

// const Total = (props) => {
//   return (
//     <>
//       <p>Number of exercises {props.num}</p>
//     </>
//   )
// }

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={course.parts} />
//       <Total num={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises} />
//     </div>
//   )
// }

const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Display = ({counter}) => <div>{counter}</div>

const App = () => {
  const name = 'Peter'
  const age = 10
  const [counter, setCounter] = useState(0)
  const [testCounter, testSetCounter] = useState("String")

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  const addLetterN = () => testSetCounter(testCounter + "n")
  const resetToString = () => testSetCounter("String")

  setTimeout(
    () => {
      setCounter(counter + 1)
      testSetCounter(testCounter + "g")
    },
    1000
  )

  console.log('rendering...', counter)

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />

      <br />
      <br />
      <br />

      <Display counter={counter} />
      <Button handleClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
    
      <br />
      <br />
      <br />

      <Display counter={testCounter} />
      <Button handleClick={addLetterN} text="add n" />
      <Button handleClick={resetToString} text="reset to string" />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
