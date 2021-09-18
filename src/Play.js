import { useState } from "react";
import PlayCard from "./PlayCard";
import PlayerTurn from "./PlayerTurn";
import { getCardValue } from "./cardValues";
import Turn from "./Turn";

const Play = ({ deckUrl, player, order, sendBookInfo, book, trumpSuit }) => {
  const [playCard1, setPlayCard1] = useState("");
  const [playCard2, setPlayCard2] = useState("");
  const [playCard3, setPlayCard3] = useState("");
  const [playCard4, setPlayCard4] = useState("");
  const [leadSuit, setLeadSuit] = useState("");
  const [turn, setTurn] = useState(1);

  var winner;

  if (turn === 1 && playCard1) {
    // Need to add code that moves the played card to the book pile
    let guac = playCard1.code.charAt(1);
    setLeadSuit(guac);
    setTurn(2);
  } else if (turn === 2 && playCard2) {
    // Need to add code that moves the played card to the book pile
    setTurn(3);
  } else if (turn === 3 && playCard3) {
    // Need to add code that moves the played card to the book pile
    setTurn(4);
  } else if (turn === 4 && playCard4) {
    // Need to add code that moves the played card to the book pile
    setTurn(5);
  } else if (turn === 5) {
    book = [playCard1, playCard2, playCard3, playCard4];
    let curBestValue = 50;
    for (let i = 0; i < book.length; i++) {
      let val = getCardValue(book[i].code, trumpSuit);
    //   console.log(val, curBestValue, playCard3, playCard4);
      if (val < curBestValue) {
        curBestValue = val;
        winner = i;
      }
    }
    let highCard = book[winner].code;
    sendBookInfo({
      winner,
      highCard,
    });
    setTurn(0);
    setPlayCard1("");
    setPlayCard2("");
    setPlayCard3("");
    setPlayCard4("");
  }

  return (
    <div>
      <div className="handInfo">
        {turn === 5 && <div>Find Winner Now, {winner}</div>}
      </div>
      <div className="hand">
        <div>
          {turn > 0 && <div>Napkin</div>}
          {turn > 0 && !playCard1 && (
            <Turn
              deckUrl={deckUrl}
              player={order[0]}
              position={1}
              sendPlayCard={setPlayCard1}
              trumpSuit={trumpSuit}
            />
          )}
          {turn > 1 && !playCard2 && (
            <Turn
              deckUrl={deckUrl}
              player={order[1]}
              position={2}
              sendPlayCard={setPlayCard2}
              trumpSuit={trumpSuit}
              leadSuit={leadSuit}
            />
          )}
          {turn > 2 && !playCard3 && (
            <Turn
              deckUrl={deckUrl}
              player={order[2]}
              position={3}
              sendPlayCard={setPlayCard3}
              trumpSuit={trumpSuit}
              leadSuit={leadSuit}
            />
          )}
          {turn > 3 && !playCard4 && (
            <PlayerTurn
              deckUrl={deckUrl}
              player={order[3]}
              position={4}
              sendPlayCard={setPlayCard4}
              trumpSuit={trumpSuit}
              leadSuit={leadSuit}
            />
          )}
        </div>
        {playCard1 && <PlayCard card={playCard1} />}
        {playCard2 && <PlayCard card={playCard2} />}
        {playCard3 && <PlayCard card={playCard3} />}
        {playCard4 && <PlayCard card={playCard4} />}
      </div>
    </div>
  );
};

export default Play;
