import { useState } from "react";
import Score from "./Score/Score";
import Round from "./Round";
import useFetch from "./useFetch";
import "./game.css";
// import Table from "./Table/Table";

const Game = () => {
  const { data, isPending, error } = useFetch(
    "https://deckofcardsapi.com/api/deck/new/"
  );

  const [round, setRound] = useState(1);
  const [gameScore, setGameScore] = useState([0, 0]);
  const [roundScore, setRoundScore] = useState(null);
  const [scoreLog, setScoreLog] = useState([]);
  const [gameOver, setGameOver] = useState("");


  
  let deckUrl = null;
  if (data) {
    deckUrl = "https://deckofcardsapi.com/api/deck/" + data.deck_id;
  }

  let tempScore = [];

  if (roundScore) {
    scoreLog[round] = roundScore;
    tempScore[0] = gameScore[0] + roundScore[0];
    tempScore[1] = gameScore[1] + roundScore[1];
    console.log("scoring", tempScore, roundScore, round);
    setScoreLog(scoreLog);
    setGameScore(tempScore);
    if (tempScore[0] > 30) {
      setGameOver("Team 1 Wins");
    }
    if (tempScore[1] > 30) {
      setGameOver("Team 2 Wins");
    }
    setRoundScore(null);
    setRound(round + 1);
  }

  return (
    <div className="gamewindow">
      {isPending && <div className="gamewindow loading">Setting up...</div>}
      {error && <div className="gamewindow loading">{error}</div>}
      {deckUrl && !gameOver && (
        <div className="game">
          <div><Score round={round} gameScore={gameScore} /></div>
          <div><Round
            deckUrl={deckUrl}
            round={round}
            sendRoundScore={setRoundScore}
            newRound={true}
          />
        </div>
        </div>
      )}
      {gameOver && (
        <div>
          <h1>{gameOver}</h1>
          <h3>Team 1: {gameScore[0]}</h3>
          <h3>Team 2: {gameScore[1]}</h3>
          <button>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default Game;
