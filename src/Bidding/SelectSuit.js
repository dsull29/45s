import { useState } from "react";
import { evaluateHand } from "../cardValues";
import useFetch from "../useFetch";
import { getBestSuit } from "./bidfuncs";
import "../Play/play.css";

const SelectSuit = ({ deckUrl, bidData, sendTrumpSuit }) => {
  const [trumpSuit, setTrumpSuit] = useState("Hearts");
  const bidder = bidData.highBidder;
  const url = deckUrl + "/pile/" + bidder + "/list/";
  const { data, error, isPending } = useFetch(url);

  const player = "You";
  console.log("bid", bidder, bidData);

  if (data) {
    if (bidder !== player) {
      let cards = data.piles[bidder].cards;
      let card;
      let cardCodes = [];
      for (card of cards) {
        cardCodes.push(card.code);
      }
      let handValues = evaluateHand(cardCodes);
      let trumpSuit = getBestSuit(handValues);
      sendTrumpSuit(trumpSuit);
    }
  }

  const handleSuitSubmit = (e) => {
    e.preventDefault();
    sendTrumpSuit(trumpSuit);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Thinking...</div>}
      {bidData.highBidder === "You" && (
        <form onSubmit={handleSuitSubmit}>
          Select suit:&nbsp;&nbsp;
          <div className="playeraction">
            <div className="playeractionselect">
              <select
                value={trumpSuit}
                onChange={(e) => setTrumpSuit(e.target.value)}
              >
                <option value="Hearts">Hearts</option>
                <option value="Diamonds">Diamonds</option>
                <option value="Spades">Spades</option>
                <option value="Clubs">Clubs</option>
              </select>
            </div>
            <div className="playeractionbutton">
              <button>Select Suit</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default SelectSuit;
