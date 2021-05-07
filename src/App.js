import "./App.scss";

import Title from "./components/Title";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <div className="App">
      <Title content="hello" />
      <Scoreboard />
    </div>
  );
}

export default App;
