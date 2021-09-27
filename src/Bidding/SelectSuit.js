import { useState } from "react";
import { evaluateHand } from "../cardValues";
import useFetch from "../useFetch";
import { getBestSuit } from "./bidfuncs";

const SelectSuit = ({ deckUrl, bidData, sendTrumpSuit }) => {
    const [trumpSuit, setTrumpSuit] = useState("Hearts");
    const bidder = bidData.highBidder
    const url = deckUrl + "/pile/" + bidder + "/list/";
    const { data, error, isPending } = useFetch(url);

    const player = "player1";

    let humanBidder;
    if (data) {
        if (bidder === player) {
          humanBidder = true;
        } else {
          humanBidder = false;
          let cards = data.piles[bidder].cards;
          let card;
          let cardCodes = []
          for (card of cards) {
              cardCodes.push(card.code)
          }
          let handValues = evaluateHand(cardCodes);
          let trumpSuit = getBestSuit(handValues)
        sendTrumpSuit(trumpSuit)
        }
      }

      const handleSuitSubmit = (e) => {
        e.preventDefault();
        sendTrumpSuit(trumpSuit)
    };




    return (
        <div>
            {bidData.highBidder === "player1" &&
                <div>
                    <form onSubmit={handleSuitSubmit}>
                        <select
                            value={trumpSuit}
                            onChange={(e) => setTrumpSuit(e.target.value)}>
                            <option value="Hearts">Hearts</option>
                            <option value="Diamonds">Diamonds</option>
                            <option value="Spades">Spades</option>
                            <option value="Clubs">Clubs</option>
                        </select>
                        <button>Select Suit</button>
                    </form>
                </div>}
        </div>)
}

export default SelectSuit;