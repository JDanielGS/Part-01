import { useState } from "react";
const Header = props => <div><h1>{props.title}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> 
)

const Footer = (props) =>{
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad
  const sum = props.sum
  const aver = props.aver
  const averGood = props.averGood
  return (
    <div>
    <p>
      <strong>Good: </strong> {good} <br />
      <strong>Neutral: </strong> {neutral} <br />
      <strong>Bad: </strong> {bad} <br />
      <strong>All: </strong> {sum} <br />
    </p>
  </div>
  )
}

const Statistics = (props) =>{
  const aver = props.aver
  const averGood = props.averGood
  return (
    <div>
      <strong>Average: </strong> {aver} <br />
      <strong>Positive: </strong> {averGood}%
    </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const sum = good + neutral + bad
  const punt = good - bad
  const aver =  sum === 0 ? 0 : punt / sum
  const averGood = sum === 0 ? 0 : (good / sum) * 100

  const setToGood = goodRev => {
    console.log('Good: ' + goodRev)
    setGood(goodRev)
  }

  const setToNeutral = neutralRev => {
    console.log('Neutral: ', neutralRev)
    setNeutral(neutralRev)
  }

  const setToBad = badRev =>{
    console.log('Bad: ', badRev)
    setBad(badRev)
  }



  return (
    <div>
      <Header title='Give FeedBack'/>
      <Button handleClick={() => setToGood(good+1)} text="Good" />
      <Button handleClick={() => setToNeutral(neutral+1)} text="Neutral" />
      <Button handleClick={() => setToBad(bad+1)} text="Bad" />
      <Footer good={good} neutral={neutral} bad={bad} sum={sum}/>
      <Statistics aver={aver} averGood={averGood}/>
    </div>
  )
}

export default App
