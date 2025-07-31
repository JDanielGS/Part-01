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


  return (
    <div>
      <Header title='Give FeedBack' />
      <Button handleClick={() => setToGood(good + 1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} sum={sum}
        aver={aver.toFixed(2)} averGood={averGood.toFixed(2)} />
    </div>
  )
}

export default App
