import { useState } from 'react'
import Votes from './Votes'
import Button from './Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  // Create an empty array at a length of above array filled with zeros 
  const [points, updatePoints] = useState(Array(anecdotes.length).fill(0))
  const [highestVotedAnecdoteIndex, updateHighestVoteIndex] = useState(0)

  const getRandomInt = () => {
    return Math.floor(Math.random() * anecdotes.length);
  }

  const vote = () => {
    const copy = [...points]
    copy[selected]++
    updatePoints(copy)
    // Get the index of highest voted anecdote in the copy array
    const max = Math.max(...copy)
    updateHighestVoteIndex(copy.indexOf(max))
  }

  const nextAnecdotes = () => { setSelected(getRandomInt()) }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}
      <Votes points={points} selected={selected} />
      <div>
        <Button name='vote' handleClick={vote} />
        <Button name='next anecdotes' handleClick={nextAnecdotes} />
      </div>
      <h1>Anecdote with most votes</h1>
      {points[highestVotedAnecdoteIndex] < 1 ? <></> : anecdotes[highestVotedAnecdoteIndex]}
      <Votes points={points} selected={highestVotedAnecdoteIndex} />
    </div>
  )
}

export default App