import { useState } from "react";
import { evaluateHand } from "../cardValues";
import useFetch from "../useFetch";
import { getBid } from "./bidfuncs";

const MakeBid = ({ deckUrl, bidder, bidData, dealer, sendBid }) => {
  const [playerBid, setPlayerBid] = useState("Pass");
  const player = "You";
  const url = deckUrl + "/pile/" + bidder + "/list/";
  const { data, error, isPending } = useFetch(url);

  const isDealer = bidder === dealer;

  let highBid = bidData.highBid;
  let humanBidder;

  if (data) {
    if (bidder === player) {
      humanBidder = true;
    } else {
      humanBidder = false;
      let cards = data.piles[bidder].cards;
      let card;
      let cardCodes = [];
      for (card of cards) {
        cardCodes.push(card.code);
      }
      let handValues = evaluateHand(cardCodes);
      let playerBid = getBid(handValues, bidData,isDealer);
      let bidYooo = { bidder, playerBid };
      sendBid(bidYooo);
    }
  }

  const handleSubmit = () => {
    sendBid({ bidder: bidder, playerBid });
  };

  function checkBidOptions(bidChoice, highBid) {
    let bidOptions = ["Pass", "15", "20", "25", "30", "30No"];
    let highBidNumber = bidOptions.indexOf(highBid);
    let bidNumber = bidOptions.indexOf(bidChoice);
    return highBidNumber < bidNumber;
  }

  return (
    <div className="playeraction">
      {error && <div>{error}</div>}
      {isPending && <div>Thinking...</div>}
      {humanBidder && (
        <div>
          <form onSubmit={handleSubmit}>
            <select
              value={playerBid}
              onChange={(e) => setPlayerBid(e.target.value)}
            >
              {isDealer && highBid && <option value="Take">Take</option>}
              {isDealer && highBid && (
                <option value="Pass">Let Bidder Have It</option>
              )}
              {!isDealer && <option value="Pass">Pass</option>}
              {checkBidOptions("15", highBid) && <option value="15">15</option>}
              {checkBidOptions("20", highBid) && <option value="20">20</option>}
              {checkBidOptions("25", highBid) && <option value="25">25</option>}
              {checkBidOptions("30", highBid) && <option value="30">30</option>}
              {checkBidOptions("30No", highBid) && (
                <option value="30No">30 No Draw</option>
              )}
            </select>
            <button>Place Bid</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MakeBid;
