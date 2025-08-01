import { useState } from "react";
const Header = props => <div><h1>{props.title}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
          <td><strong>{props.text}: </strong></td>
          <td>{props.value}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const sum = props.sum
  const aver = props.aver
  const averGood = props.averGood

  if (sum === 0) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return(
      <div>
        <h2>Statistics</h2>
        {good > 0 && <StatisticLine text='Good' value={good}/>}
        {neutral > 0 && <StatisticLine text='Neutral' value={neutral}/>}
        {bad > 0 && <StatisticLine text='Bad' value={bad}/>}
        {sum > 0 && <StatisticLine text='All' value={sum}/>}
        <StatisticLine text='Average' value={aver}/>
        {averGood > 0 && <StatisticLine text='Positive' value={averGood}/>}
      </div>
    )
  }
}

const Anecdotes = (props) => {
  return(
    <div>
      <p>{props.anecdotes}</p>
    </div>
  )
}

const App = () => {
  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']
  
  const [selected, setSelected] = useState(0)
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad
  const punt = good - bad
  const aver = sum === 0 ? 0 : punt / sum
  const averGood = sum === 0 ? 0 : (good / sum) * 100

  const setToGood = goodRev => {
    console.log('Good: ' + goodRev)
    setGood(goodRev)
  }

  const setToNeutral = neutralRev => {
    console.log('Neutral: ', neutralRev)
    setNeutral(neutralRev)
  }

  const setToBad = badRev => {
    console.log('Bad: ', badRev)
    setBad(badRev)
  }
  const setToSelected = selectedChoice => {
    console.log('Selected: ' + selectedChoice)
    setSelected(selectedChoice)
  }


  return (
    <div>
      <Header title='Give FeedBack' />
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}
        aver={aver.toFixed(2)} averGood={averGood.toFixed(2)} />
      <Anecdotes anecdotes={anecdotes[selected]}/>
      <Button handleClick={() => setToSelected(Math.floor(Math.random() * 8))} text="Next Anecdote" />
    </div>
  )
}

export default App
