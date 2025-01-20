import GameSec from "./components/GameSec";
import Title from "./components/Title";
import "./App.css";

function App() {
  return (
    <>
      <div className="mainContainer">
        <Title />
        <div className="gameSec">
          <GameSec />
        </div>
      </div>
    </>
  );
}

export default App;
