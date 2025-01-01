import { useState } from 'react'
import { nanoid } from 'nanoid'
import Die from './components/Die'
import Header from './components/Header'

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

  // update dice that are NOT held in array
  function updateDice() {
    setDice(dice.map((die) => (
      die.isHeld !== true
      ? {...die, value: randomDie()}
      : die
    )))
  }

  // toggle die's isHeld property based on id
  function toggleHold(id) {
    setDice(dice.map((die) => (
      die.id === id
      ? {...die, isHeld: !die.isHeld}
      : die
    )))
  }

  // return div element for each die in dice array
  const diceElements = dice.map(die => (
    <Die 
      key={die.id} 
      value={die.value}
      isHeld={die.isHeld}
      toggleHold={toggleHold}
      id={die.id}
    />
  ))

  return (
    <main>
      <Header />
      <div className='dice-container'>
        {diceElements}
      </div>
      <button className='roll-dice' onClick={updateDice}>Roll</button>
    </main>
  )
}

export default App