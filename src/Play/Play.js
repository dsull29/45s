import { useState } from "react";
import { getCardValue } from "../cardValues";
import { getBookOrder } from "../deckFuncs";
import Hand from "../Hand";
import PlayerTurn from "./PlayerTurn";
import Turn from "./Turn";
import "./play.css";
import BidInfo from "../Bidding/BidInfo";
import ViewTable from "../ViewTable";

const Play = ({
  deckUrl,
  player,
  order,
  sendBookInfo,
  book,
  bookInfo,
  bidData,
}) => {
  const [playCard1, setPlayCard1] = useState("");
  const [playCard2, setPlayCard2] = useState("");
  const [playCard3, setPlayCard3] = useState("");
  const [playCard4, setPlayCard4] = useState("");
  const [leadSuit, setLeadSuit] = useState("");
  const [turn, setTurn] = useState(1);

  const playedCards = [playCard1, playCard2, playCard3, playCard4];
  let bookNum = book;
  let bookOrder = getBookOrder(bookInfo, order);

  if (turn === 1 && playCard1) {
    let guac = playCard1.code.charAt(1);
    setLeadSuit(guac);
    setTurn(2);
  } else if (turn === 2 && playCard2) {
    setTurn(3);
  } else if (turn === 3 && playCard3) {
    setTurn(4);
  } else if (turn === 4 && playCard4) {
    setTimeout(() => {
      setTurn(5);
    }, 2000);
  } else if (turn === 5) {
    let curBestValue = 50;
    let winner;
    for (let i = 0; i < playedCards.length; i++) {
      let val = getCardValue(playedCards[i].code, bidData.trumpSuit, leadSuit);
      if (val < curBestValue) {
        curBestValue = val;
        winner = i;
      }
    }
    let highCard = playedCards[winner].code;
    let winningPlayer = bookOrder[winner];
    let tempLog = { bookNum, winningPlayer, highCard };
    sendBookInfo(tempLog);
  }

  function whoseTurn(val, sendPlayCard) {
    if (checkPlayerPosition(player, bookOrder) === val) {
      return (
        <PlayerTurn
          deckUrl={deckUrl}
          player={bookOrder[val - 1]}
          bookOrder={bookOrder}
          position={val}
          sendPlayCard={sendPlayCard}
          bidData={bidData}
          leadSuit={leadSuit}
          playedCards={playedCards}
        />
      );
    } else {
      return (
        <Turn
          deckUrl={deckUrl}
          player={bookOrder[val - 1]}
          bookOrder={bookOrder}
          position={val}
          sendPlayCard={sendPlayCard}
          bidData={bidData}
          leadSuit={leadSuit}
          playedCards={playedCards}
        />
      );
    }
  }

  function getPlayerCard(player, order) {
    let num = order.indexOf(player);
    return playedCards[num];
  }

  const players = ["You", "Mario", "Partner", "Luigi"];
  function getActions(order) {
    let actions = [];
    for (let i = 0; i < players.length; i++) {
      actions[i] = getPlayerCard(players[i], order);
    }
    return actions;
  }

  return (
    <div>
      <div className="viewTableContainer">
        <ViewTable
          stage="Playing"
          players={players}
          actions={getActions(bookOrder)}
          // bidData={bidData}
        />
      </div>

      <div className="bidInfoContainer">
        <BidInfo bidData={bidData} />
      </div>

      <div className="playerWindowContainer">
        <div className="playerwindow">
          <Hand deckUrl={deckUrl} player={player} />
          <div className="playeraction">
            {turn > 0 && !playCard1 && whoseTurn(1, setPlayCard1)}
            {turn > 1 && !playCard2 && whoseTurn(2, setPlayCard2)}
            {turn > 2 && !playCard3 && whoseTurn(3, setPlayCard3)}
            {turn > 3 && !playCard4 && whoseTurn(4, setPlayCard4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Play;

/** finds the human players position
 * @param  {String} player player name
 * @param  {Array} order order of players (currently fixed to roundOrder)
 */
export function checkPlayerPosition(player, order) {
  let num = order.indexOf(player) + 1;
  return num;
}
