import { useState } from "react";
const Header = props => <div><h1>{props.title}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button> 
)

const Footer = (props) =>{
  return (
    <div>
    <p>
      <strong>Good: </strong> {props.good} <br />
      <strong>Neutral: </strong> {props.neutral} <br />
      <strong>Bad: </strong> {props.bad}
    </p>
  </div>
  )
}

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
      <Footer good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
