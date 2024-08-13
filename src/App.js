import './App.css';
import Box from './component/box'; // Ensure this matches the actual file name

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
  }
};

function App() {
  const play = (userChoice) => {
    console.log("selected",userChoice);
  };

  return (
    <div className="main">
      <Box title="You" img={choice.rock.img} />
      <Box title="Computer" img={choice.scissor.img} />
      <div className="button">
        <button onClick={() =>play("rock")}>Rock</button>
        <button onClick={() =>play("scissor")}>Scissor</button>
        <button onClick={() =>play("paper")}>Paper</button>
      </div>
    </div>
  );
}

export default App;
