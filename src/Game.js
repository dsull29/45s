import { useState } from 'react';
// import useFetch from './useFetch';
import Score from './Score';
import Round from './Round';

const Game = () => {
    const [scoreLog, setScoreLog] = useState({
        roundNum: 0,
        team1Score: 0,
        team2Score: 0
    });

    return (
        <div className="game">
            <Score scoreLog={scoreLog} />
            <Round scoreLog={scoreLog} sendScoreLog={setScoreLog} />
        </div>
    );
};

// const bidList = []

export default Game;

