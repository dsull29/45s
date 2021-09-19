import { useState } from "react";
import Score from "./Score";
import Round from "./Round";

const Game = () => {
  const [round, setRound] = useState(1);
  const [gameScore, setGameScore] = useState([0, 0]);
  const [roundScore, setRoundScore] = useState(null);
  const [scoreLog, setScoreLog] = useState([]);

  let tempScore = [];

  if (roundScore) {
    scoreLog[round] = roundScore;
    tempScore[0] = gameScore[0] + roundScore[0];
    tempScore[1] = gameScore[1] + roundScore[1];
    console.log("scoring", tempScore,roundScore,round);
    setScoreLog(scoreLog);
    setGameScore(tempScore);
    setRoundScore(null);
    setRound(round + 1);
  }

  /// TODO need to keep the roundScore and tally up the score log.
  // maybe go back to keeping team1Score and team2Score seperate?
  // and then the "scoreLog" could be the tally? or do I keep them
  //  together in a single object?

  return (
    <div className="game">
      <Score round={round} gameScore={gameScore} />
      <Round round={round} sendRoundScore={setRoundScore} newRound= { true }/>
    </div>
  );
};

export default Game;
