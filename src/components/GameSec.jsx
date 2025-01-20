import { useState } from "react";
import DisplayPara from "./DisplayPara";
import "./style.css";

function GameSec() {
  const [value, setValue] = useState("");
  let [winner, setWinner] = useState(false);
  const [count, setCount] = useState(0);

  const result = `Better luck Next Time, (${count})th time Try Again :(`;

  const generateNumber = () => {
    let randomNumber = Math.floor(Math.random() * 900) + 100;
    setValue(randomNumber);
  };

  const checkWinners = () => {
    let sum = 0;
    let number = value;
    while (number != 0) {
      let lastdigit = number % 10;
      sum += lastdigit;
      number = Math.floor(number / 10);
    }
    setCount(count + 1);
    console.log(sum);
    if (sum === 15) {
      setWinner(true);
      setCount(0);
    } else {
      setWinner(false);
    }
  };

  return (
    <>
      <div id="gameBox">
        <div id="toeknSec">
          <div className="tokenNumber">
            <p>Token Number : {value}</p>
          </div>
          <div id="buttonsSec">
            <button onClick={generateNumber}>Generate Token</button>
            <button onClick={checkWinners}>Check</button>
          </div>
          <DisplayPara text={result} winner={winner} />
        </div>
      </div>
    </>
  );
}

export default GameSec;
