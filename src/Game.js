import { useState } from "react";
import Score from "./Score/Score";
import Round from "./Round";
import useFetch from "./useFetch";
import { getFreshDeck } from "./deckFuncs";

const Game = () => {
  const { data, isPending, error } = useFetch(
    "https://deckofcardsapi.com/api/deck/new/"
  );

  const [round, setRound] = useState(1);
  const [gameScore, setGameScore] = useState([0, 0]);
  const [roundScore, setRoundScore] = useState(null);
  const [scoreLog, setScoreLog] = useState([]);

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
    setRoundScore(null);
    setRound(round + 1);
  }

  return (
    <div>
      {isPending && <div>Setting up...</div>}
      {error && <div>{error}</div>}
      {deckUrl && (
        <div className="game">
          <Score round={round} gameScore={gameScore} />
          <Round
            deckUrl={deckUrl}
            round={round}
            sendRoundScore={setRoundScore}
            newRound={true}
          />
        </div>
      )}
    </div>
  );
};

export default Game;
