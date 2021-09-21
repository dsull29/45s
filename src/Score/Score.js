import React from "react";

const Score = ({ round, gameScore }) => {
  return (
    <div className="scoreboard" style={{ textAlign: "left" }}>
      <div className="score">
        <span>
          <div data-testid="team1Score">Team 1: {gameScore[0]}</div>
          <div data-testid="team2Score">Team 2: {gameScore[1]}</div>
          <div data-testid="round">Round: {round}</div>
        </span>
      </div>
    </div>
  );
};

export default Score;
