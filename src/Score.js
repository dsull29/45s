const Score = ({ round, gameScore }) => {
  return (
    <div className="scoreboard" style={{ textAlign: "left" }}>
      <div className="score">
        <span>
          <h3>
            Team 1: {gameScore[0]} | Team 2: {gameScore[1]} | Round: {round}
          </h3>
        </span>
      </div>
    </div>
  );
};

export default Score;
