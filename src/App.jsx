import { useState } from "react";
const Header = props => <div><h1>{props.title}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const sum = props.sum
  const aver = props.aver
  const averGood = props.averGood
  const comp = props.comp
  
  if (comp) {
    return (
      <div>
        <h2>Statistics</h2>
        <p>
        <strong>Good: </strong> {good} <br />
        <strong>Neutral: </strong> {neutral} <br />
        <strong>Bad: </strong> {bad} <br />
        <strong>All: </strong> {sum} <br />
        <strong>Average: </strong> {aver} <br />
        <strong>Positive: </strong> {averGood}%
      </p>
      </div>
    )
  } else {
    return (
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
}

const App = () => {

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

  let comp = true

  if (sum === 0) {
    comp = false
  }


  return (
    <div>
      <Header title='Give FeedBack' />
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum} 
      aver={aver} averGood={averGood} comp={comp} />
    </div>
  )
}

export default App
