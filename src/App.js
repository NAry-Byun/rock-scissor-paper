import React, { useState } from 'react';
import './App.css';
import Box from './component/box';

const choice = {
  rock: {
    name: "rock",
    img: "https://thumb.ac-illust.com/0a/0a682b9a893608f5f8c086129d187dd6_w.jpeg"
  },
  scissor: {
    name: "scissor",
    img: "https://thumb.ac-illust.com/a2/a235fe14b37fb4656cc10f16859e5c23_w.jpeg"
  },
  paper: {
    name: "paper",
    img: "https://thumb.ac-illust.com/65/65d8224bddc4a1fb91ef1332cc373fc0_w.jpeg"
  },
   beginning1: {
    name: "Paws match",
    img: "https://i.etsystatic.com/37537094/r/il/0e1aa1/6077820437/il_794xN.6077820437_3arg.jpg"  
  },
  beginning2: {
    name: "Let's Play",
    img: "https://previews.123rf.com/images/iridi/iridi2106/iridi210600417/170456891-the-cat-shoots-an-arrow-from-the-bow-in-the-heart-white-background.jpg"  
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(choice.beginning1);
  const [computerSelect, setComputerSelect] = useState(choice.beginning2);
  const [result, setResult] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const play = (userChoice) => {
    const userSelection = choice[userChoice];
    setUserSelect(userSelection);

    const computerChoice = Object.keys(choice)[Math.floor(Math.random() * 3)];
    const computerSelection = choice[computerChoice];
    setComputerSelect(computerSelection);

    const gameResult = judgement(userSelection, computerSelection);
    if (gameResult === "win") {
      setUserScore(userScore + 1);
    } else if (gameResult === "lose") {
      setComputerScore(computerScore + 1);
    }
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      setResult("tie");
      return "tie";
    } else if (
      (user.name === "rock" && computer.name === "scissor") ||
      (user.name === "scissor" && computer.name === "paper") ||
      (user.name === "paper" && computer.name === "rock")
    ) {
      setResult("win");
      return "win";
    } else {
      setResult("lose");
      return "lose";
    }
  };

  const resetGame = () => {
    setUserScore(0);
    setComputerScore(0);
  };

  return (
    <div className="main">
      <Box title="You" item={userSelect} result={result} />
      <Box title="Computer" item={computerSelect} result={result} />
      <div className="scoreboard">
        <h2>Your Score: {userScore}</h2>
        <h2>Computer Score: {computerScore}</h2>
      </div>
      <div className="button-container">
        <button onClick={() => play("rock")}>Rock</button>
        <button onClick={() => play("scissor")}>Scissor</button>
        <button onClick={() => play("paper")}>Paper</button>
        <button onClick={resetGame}>Reset Game</button>
      </div>
    </div>
  );
}

export default App;
