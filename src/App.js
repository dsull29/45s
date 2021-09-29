import { useState } from "react";
import Header from "./Header/Header";
import "./App.css";
import Game from "./Game";
import Footer from "./Footer/Footer";

function App() {
  const [inGame, setInGame] = useState(false);

  return (
    <div className="App">
      <Header />
      {inGame === false && (
        <div className="gamewindow">
          <button className="startbutton" onClick={() => setInGame(true)}>
            Start Game
          </button>
        </div>
      )}
      {inGame && <Game />}
      <Footer />
    </div>
  );
}

export default App;
