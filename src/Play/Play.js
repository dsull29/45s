import { useState } from "react";
import { getCardValue } from "../cardValues";
import { getBookOrder } from "../deckFuncs";
import Hand from "../Hand";
import PlayCard from "./PlayCard";
import PlayerTurn from "./PlayerTurn";
import PlayLog from "./PlayLog";
import Turn from "./Turn";
import "./play.css";
import BidInfo from "../Bidding/BidInfo";

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
      let val = getCardValue(playedCards[i].code, bidData.trumpSuit);
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
          player={player}
          position={val}
          sendPlayCard={sendPlayCard}
          trumpSuit={bidData.trumpSuit}
          leadSuit={leadSuit}
        />
      );
    } else {
      return (
        <Turn
          deckUrl={deckUrl}
          player={bookOrder[val - 1]}
          position={val}
          sendPlayCard={sendPlayCard}
          trumpSuit={bidData.trumpSuit}
        />
      );
    }
  }

  function getPlayerCard(player, order) {
    let num = order.indexOf(player);
    return playedCards[num];
  }

  return (
    <div>
      <div className="playboard">
        <div className="playboardrow">
          <div className="playboardbox"></div>
          <div className="playboardbox player3">
            <PlayCard card={getPlayerCard("Partner", bookOrder)} />
          </div>
          <div className="playboardbox"></div>
        </div>

        <div className="playboardrow">
          <div className="playboardbox player2">
            <PlayCard card={getPlayerCard("Mario", bookOrder)} />
          </div>
          <div className="playboardbox"></div>
          <div className="playboardbox player4">
            <PlayCard card={getPlayerCard("Luigi", bookOrder)} />
          </div>
        </div>

        <div className="playboardrow">
          <div className="playboardboxlog">
            <BidInfo bidData={bidData} />
          </div>
          <div className="playboardbox player1">
            <PlayCard card={getPlayerCard("You", bookOrder)} />
          </div>
          <div className="playboardboxlog">
            <PlayLog bookInfo={bookInfo} />
          </div>
        </div>
      </div>

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
