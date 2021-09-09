const Score = ({ scoreLog }) => {

  return (
    <div className="scoreboard" style={{ textAlign: "left" }}>
      <div className="score"><span><h3>Team 1: {scoreLog.team1Score} | Team 2: {scoreLog.team2Score} | Round {scoreLog.roundNum + 1}</h3></span></div>
    </div>

  );
}

export default Score;