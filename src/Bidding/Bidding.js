import { useEffect, useState } from "react";
import { checkBid } from "./bidfuncs";
import MakeBid from "./MakeBid";
import "./bidding.css";
import Hand from "../Hand";
import SelectSuit from "./SelectSuit";
import ViewTable from "../ViewTable";

const Bidding = ({ deckUrl, bidOrder, sendBidData }) => {
  const [bid1, setBid1] = useState("");
  const [bid2, setBid2] = useState("");
  const [bid3, setBid3] = useState("");
  const [bid4, setBid4] = useState("");
  const [trumpSuit, setTrumpSuit] = useState("");
  const [turn, setTurn] = useState(1);
  const [bidData, setBidData] = useState({
    highBid: null,
    highBidder: null,
    trumpSuit: null,
  });

  useEffect(() => {
    // setBid1("");
    // setBid2("");
    // setBid3("");
    // setBid4("");
    setBidData({ highBid: null, highBidder: null, trumpSuit: null });
  }, [bidOrder]);

  // need to call this one bidder at a time in it's own object.
  // probably want a nested structure like 'Play' where each
  // CPU player has their own component
  // and then the human player has their component
  // *** consider rolling SelectSuit under that umbrella as well.

  let bidder = bidOrder[turn - 1];
  // const bidOptions = ["Pass", "15", "20", "25", "30", "30 No Draw"];
  const dealer = bidOrder[3];

  switch (turn) {
    case 1: {
      if (bid1) {
        let { highBid, highBidder } = checkBid(bid1, bidData);
        if (highBid) {
          setBidData({ highBid, highBidder, trumpSuit });
        }
        setTurn(2);
      }
      break;
    }
    case 2: {
      if (bid2) {
        let { highBid, highBidder } = checkBid(bid2, bidData);
        if (highBid) {
          setBidData({ highBid, highBidder, trumpSuit });
        }
        setTurn(3);
      }
      break;
    }
    case 3: {
      if (bid3) {
        let { highBid, highBidder } = checkBid(bid3, bidData);
        if (highBid) {
          setBidData({ highBid, highBidder, trumpSuit });
        }
        setTurn(4);
      }
      break;
    }
    case 4: {
      if (bid4) {
        let { highBid, highBidder } = checkBid(bid4, bidData);
        if (highBid) {
          setBidData({ highBid, highBidder, trumpSuit });
        } else if (!bidData.highBid) {
          setBidData({ highBid: "15", highBidder: dealer, trumpSuit });
        }
        setTurn(5);
      }
      break;
    }
    case 5: {
      if (trumpSuit) {
        let highBid = bidData.highBid;
        let highBidder = bidData.highBidder;
        setBidData({ highBid, highBidder, trumpSuit });
        setTurn(6);
      }
      break;
    }

    case 6: {
      sendBidData(bidData);
    }
    default: {
      console.log("bid turn default hit")
    }
  }

  const bids = [bid1, bid2, bid3, bid4];

  function getPlayerBid(player, order) {
    let num = order.indexOf(player);
    // console.log("crash", player, bids, num);
    return bids[num];
  }

  const players = ["You", "Mario", "Partner", "Luigi"];
  function getActions(bids, bidOrder) {
    let actions = [];
    for (let i = 0; i < players.length; i++) {
      actions[i] = getPlayerBid(players[i], bidOrder);
    }
    return actions;
  }

  return (
    <div className="game">
      <div className="viewTableContainer">
        <ViewTable
          stage="Bidding"
          players={players}
          actions={getActions(bids, bidOrder)}
          bidData={bidData}
        />
      </div>
      <div className="playerWindowContainer">
        <div className="playerwindow">
          <Hand deckUrl={deckUrl} player={"You"} />
          {turn === 1 && (
            <MakeBid
              deckUrl={deckUrl}
              bidder={bidder}
              bidData={bidData}
              dealer={dealer}
              sendBid={setBid1}
            />
          )}
          {turn === 2 && (
            <MakeBid
              deckUrl={deckUrl}
              bidder={bidder}
              bidData={bidData}
              dealer={dealer}
              sendBid={setBid2}
            />
          )}
          {turn === 3 && (
            <MakeBid
              deckUrl={deckUrl}
              bidder={bidder}
              bidData={bidData}
              dealer={dealer}
              sendBid={setBid3}
            />
          )}
          {turn === 4 && (
            <MakeBid
              deckUrl={deckUrl}
              bidder={bidder}
              bidData={bidData}
              dealer={dealer}
              sendBid={setBid4}
            />
          )}
          {turn === 5 && (
            <SelectSuit
              deckUrl={deckUrl}
              bidData={bidData}
              sendTrumpSuit={setTrumpSuit}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Bidding;
