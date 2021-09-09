import { useState } from 'react';
import './App.css';
import Game from './Game';

function App() {
  const [inGame, setInGame] = useState(false);

  return (
    <div className="App">
      <h2>45s</h2>
      { inGame===false && <button onClick={() => setInGame(true)}>Start Game</button>}
      { inGame && <Game />}
       
    </div>
  );
}

export default App;
