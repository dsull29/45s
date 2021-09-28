import React from "react";
import "./score.css";

const Score = ({ round, gameScore }) => {
  return (
    <div className="scoreBoard" style={{ textAlign: "left" }}>
          <div className="scoreBoardItem" data-testid="team1Score">Team 1: {gameScore[0]}</div>
          <div className="scoreBoardItem" data-testid="round">Round: {round}</div>
          <div className="scoreBoardItem" data-testid="team2Score">Team 2: {gameScore[1]}</div>
    </div>
  );
};

export default Score;
