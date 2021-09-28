const PlayWinner = ({team1, team2, sendRoundScore, sendStage}) => {
    return ( 
        <div classname="gamewindow">
        <div className="biddingwindow">
        <div className="windowheader">Round Over!</div>
        <div className="playwinner">Team 1: {team1}</div>
        <div className="playwinner">Team 2: {team2}</div>
      </div>

        <div className="nextroundbutton">
              <button
          onClick={() => {
            sendRoundScore([team1, team2]);
            sendStage("Over");
          }}
        >
          Next Round
        </button>
        </div>
        </div>


 );
}
 
export default PlayWinner;