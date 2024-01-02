import React, { useState } from "react"
import Card from "./components/Card"
import "./App.css"

const App = () => {
  const suit = ["❤️", "♦️", "♠️", "♣️"]
  const rank = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ]
  const [hand, setHand] = useState([])

  const drawCard = () => {
    // 1) Generate a random rank and suit to represent a card.
    const draw = `${rank[Math.floor(Math.random() * rank.length)]} ${
      suit[Math.floor(Math.random() * suit.length)]
    }`
    // 2) See if the card drawn is not already in the hand. 
    if (hand.indexOf(draw) === -1) {
      // 3) If the card not in the hand, add it
      setHand([...hand, draw])
      // 4) Update the state to include the new card. 
    } else if (hand.length !== 52) {
      // 5) If the card is already in the hand and the deck is not empty, repeatedly call drawCard to draw a new card. 
      drawCard()
      // 6) Continue to draw a card until a unique card is drawn. 
    } else {
      // 7) If the deck is empty and all cards have been dealt, show an alert that indicates all cards were dealt. 
      alert("All cards have been dealt.")
    }
  }
  // No need to change anything ABOVE this line ^

  const shuffle = () => {
    // Reset the hand to an empty array and simulate the deck shuffling.
    setHand([])
  }

  return (
    <>
    <h1>Draw a Card</h1>
    <button onClick={drawCard}>Click to Draw a Card</button>
    <button onClick={shuffle}>Return Cards and Shuffle Deck</button>
    <Card hand={hand} />
    </>
  )
}

export default App

