import { useState } from "react";
const Header = props => <div><h1>{props.title}</h1></div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)


const Anecdotes = ({anecdotes, votes}) => {
  return (
    <div>
      <p>{anecdotes}. <br /> <strong>has:</strong> {votes} votes</p>
    </div>
  )
}

const BestAnecdote = ({title, anecdote, votes}) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{anecdote} <br /> <strong>Has: </strong> {votes} votes</p>
    </div>
  )
}

const App = () => {
  const [votes, setVotes] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0
  })

  const totalVotes = Object.values(votes).reduce((sum, val) => sum + val, 0)

  let mostVoted = 0

  if (totalVotes > 0) {
    mostVoted = Object.keys(votes).reduce((a, b) =>
    votes[a] > votes[b] ? Number(a) : Number(b))
  }

  const anecdotes = ['If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.']

  const [selected, setSelected] = useState(0)

  const setToSelected = selectedChoice => {
    console.log('Selected: ' + selectedChoice)
    setSelected(selectedChoice)
  }
  const setToVote = () => {
    const copy = { ...votes }
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Header title='Anecdote of the day' />
      <Anecdotes anecdotes={anecdotes[selected]} votes={votes[selected]}/>
      <Button handleClick ={setToVote} text='Vote'/>
      <Button handleClick={() => setToSelected(Math.floor(Math.random() * 8))}
        text="Next Anecdote" />
      <BestAnecdote title='Anecdote with most votes' 
      anecdote={anecdotes[mostVoted]} votes={votes[selected]}/>
    </div>
  )
}

export default App
