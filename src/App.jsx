import { useState } from 'react'
import Die from './components/Die'
import { nanoid } from 'nanoid'

function App() {
  // set/update array of dice
  const [dice, setDice] = useState(generateNewDice())
  
  // throw die (randomDie)
  function randomDie() {
    return Math.ceil(Math.random()*6)
  }

  // generate array with random dice
  function generateNewDice() {
    return new Array(10)
      .fill(0)
      .map(() => ({
        value: randomDie(),
        isHeld: false,
        id: nanoid()
      }))
  }

  function updateDice() {
    setDice(generateNewDice)
  }

  const diceElements = dice.map(die => (
    <Die key={die.id} value={die.value}/>
  ))

  return (
    <main>
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={updateDice}>Roll</button>
    </main>
  )
}

export default App