import { useState } from "react";
import { getCardValue } from "../cardValues";
import PlayCard from "./PlayCard";
import PlayerTurn from "./PlayerTurn";
import Turn from "./Turn";

const Play = ({ deckUrl, player, order, sendBookInfo, book, trumpSuit, bookInfo }) => {
  const [playCard1, setPlayCard1] = useState("");
  const [playCard2, setPlayCard2] = useState("");
  const [playCard3, setPlayCard3] = useState("");
  const [playCard4, setPlayCard4] = useState("");
  const [leadSuit, setLeadSuit] = useState("");
  const [turn, setTurn] = useState(1);

  var winner;

  let bookNum = book;

  if (turn === 1 && playCard1) {
    let guac = playCard1.code.charAt(1);
    setLeadSuit(guac);
    setTurn(2);
  } else if (turn === 2 && playCard2) {
    setTurn(3);
  } else if (turn === 3 && playCard3) {
    setTurn(4);
  } else if (turn === 4 && playCard4) {
    setTurn(5);
  } else if (turn === 5) {
    book = [playCard1, playCard2, playCard3, playCard4];
    let curBestValue = 50;
    for (let i = 0; i < book.length; i++) {
      let val = getCardValue(book[i].code, trumpSuit);
      if (val < curBestValue) {
        curBestValue = val;
        winner = i;
      }
    }
    let highCard = book[winner].code;
    let winningPlayer = order[winner]
    let tempLog = { bookNum, winningPlayer, highCard };
    sendBookInfo(tempLog);
  }

  function whoseTurn(val, sendPlayCard) {
    // want to check whose turn it is to decide which card to render
    // right now everything is set to work on RoundOrder and there's only one player
    // need to checkPlayerPosition = Turn and then render the PlayerTurn instead of CpuTurn
    //
    // console.log(val,order[val-1])
    if (checkPlayerPosition(player, order) === val) {
      return (
        <PlayerTurn
          deckUrl={deckUrl}
          player={player}
          position={val}
          sendPlayCard={sendPlayCard}
          trumpSuit={trumpSuit}
          leadSuit={leadSuit}
        />
      );
    } else {
      return (
        <Turn
          deckUrl={deckUrl}
          player={order[val-1]}
          position={val}
          sendPlayCard={sendPlayCard}
          trumpSuit={trumpSuit}
        />
      );
    }
  }

  function DisplayLog() {
    let x = [];
    
    for (book of bookInfo) {
      x.push(<div>{book.bookNum}: {`${book.winningPlayer === "player1" || book.winningPlayer === "player3" ? "Team 1" : "Team 2"}`} {book.highCard} {book.winningPlayer}</div>)
    }
    
    return <div>{x}</div>

  }

  return (
    <div>
      <div className="handInfo">
        {turn === 5 && <div>Find Winner Now, {winner}</div>}
      </div>
      <div className="hand">
      {turn > 0 && !playCard1 && whoseTurn(1, setPlayCard1)}
      {turn > 1 && !playCard2 && whoseTurn(2, setPlayCard2)}        
      {turn > 2 && !playCard3 && whoseTurn(3, setPlayCard3)}        
      {turn > 3 && !playCard4 && whoseTurn(4, setPlayCard4)}                      

        {playCard1 && <PlayCard card={playCard1} />}
        {playCard2 && <PlayCard card={playCard2} />}
        {playCard3 && <PlayCard card={playCard3} />}
        {playCard4 && <PlayCard card={playCard4} />}
      </div>
    { bookInfo && DisplayLog()}
    </div>

  );
};

export default Play;

/** finds the human players position
 * @param  {String} player handle of the player (fixed to "player1" ATM)
 * @param  {Array} order order of players (currently fixed to roundOrder)
 */
export function checkPlayerPosition(player, order) {
  let num = order.indexOf(player) + 1;
  return num;
}
