import { useState } from "react";
import { evaluateHand } from "../cardValues";
import useFetch from "../useFetch";
import { getBid } from "./bidfuncs";

const MakeBid = ({ deckUrl, bidder, bidData, dealer, sendBid }) => {
  const [playerBid, setPlayerBid] = useState("Pass");
  const player = "You";
  const url = deckUrl + "/pile/" + bidder + "/list/";
  const { data, error, isPending } = useFetch(url);

  let highBid = bidData.highBid;
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
      let playerBid = getBid(handValues,bidData);
      let bidYooo = {bidder,playerBid}
      sendBid(bidYooo)
    }
  }

  let isDealer = player === dealer;
  
  const handleSubmit = () => {
      sendBid({"bidder": bidder,
               playerBid })
  }

  return (
    <div className="playeraction">
      {humanBidder && (
        <div>
          <form onSubmit={handleSubmit}>
            <select
              value={playerBid}
              onChange={(e) => setPlayerBid(e.target.value)}
            >
              {isDealer && <option value="Take">Take</option>}
              <option value="Pass">Pass</option>
{/* TODO bidOptions need to be better */}
              {highBid === null && <option value="15">15</option>}
              {highBid === "15" && <option value="20">20</option>}
              <option value="25">25</option>
              <option value="30">30</option>
              <option value="30No">30 No Draw</option>
            </select>
            <button>Place Bid</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default MakeBid;
