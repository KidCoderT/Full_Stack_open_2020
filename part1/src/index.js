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

const Display = props => <div>{props.value}</div>

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const ButtonTwo = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])
  const [value, setValue] = useState(10)
  const [valueTwo, setValueTwo] = useState(10)

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
  }

  const handleClick = () => {
    console.log('clicked the button')
    setValue(0)
  }

  const hello = (who) => () => {
    console.log('hello', who)
  }

  const setToValueTwo = (newValue) => {
    setValueTwo(newValue)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <br />
      <History allClicks={allClicks} />

      <br />
      <br />
      <br />
      <br />

      <Display value={value} />

      <button onClick={handleClick}>reset to zero</button>

      <br />
      <br />
      <br />
      <br />

      <button onClick={hello('world')}>button</button>
      <button onClick={hello('react')}>button</button>
      <button onClick={hello('function')}>button</button>

      <br />
      <br />
      <br />
      <br />

      <Display value={valueTwo} />
      <ButtonTwo handleClick={() => setToValueTwo(1000)} text="thousand" />
      <ButtonTwo handleClick={() => setToValueTwo(0)} text="reset" />
      <ButtonTwo handleClick={() => setToValueTwo(valueTwo + 1)} text="increment" />

    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
