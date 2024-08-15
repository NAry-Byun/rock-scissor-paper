import React, { Component } from 'react';
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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: choice.beginning1,
      computerSelect: choice.beginning2,
      result: "",
      userScore: 0,
      computerScore: 0
    };
  }

  play = (userChoice) => {
    const userSelection = choice[userChoice];
    this.setState({ userSelect: userSelection });

    const computerChoice = Object.keys(choice)[Math.floor(Math.random() * 3)];
    const computerSelection = choice[computerChoice];
    this.setState({ computerSelect: computerSelection });

    const gameResult = this.judgement(userSelection, computerSelection);
    if (gameResult === "win") {
      this.setState((prevState) => ({ userScore: prevState.userScore + 1 }));
    } else if (gameResult === "lose") {
      this.setState((prevState) => ({ computerScore: prevState.computerScore + 1 }));
    }
  };

  judgement = (user, computer) => {
    if (user.name === computer.name) {
      this.setState({ result: "tie" });
      return "tie";
    } else if (
      (user.name === "rock" && computer.name === "scissor") ||
      (user.name === "scissor" && computer.name === "paper") ||
      (user.name === "paper" && computer.name === "rock")
    ) {
      this.setState({ result: "win" });
      return "win";
    } else {
      this.setState({ result: "lose" });
      return "lose";
    }
  };

  resetGame = () => {
    this.setState({
      userScore: 0,
      computerScore: 0
    });
  };

  render() {
    return (
      <div className="main">
        <Box title="You" item={this.state.userSelect} result={this.state.result} />
        <Box title="Computer" item={this.state.computerSelect} result={this.state.result} />
        <div className="scoreboard">
          <h2>Your Score: {this.state.userScore}</h2>
          <h2>Computer Score: {this.state.computerScore}</h2>
        </div>
        <div className="button-container">
          <button onClick={() => this.play("rock")}>Rock</button>
          <button onClick={() => this.play("scissor")}>Scissor</button>
          <button onClick={() => this.play("paper")}>Paper</button>
          <button onClick={this.resetGame}>Reset Game</button>
        </div>
      </div>
    );
  }
}

export default App;
