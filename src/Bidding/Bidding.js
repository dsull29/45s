import { useEffect, useState } from "react";
import { checkBid } from "./bidfuncs";
import MakeBid from "./MakeBid";

const Bidding = ({ deckUrl, bidOrder, sendBidData }) => {
  const [bid1, setBid1] = useState("");
  const [bid2, setBid2] = useState("");
  const [bid3, setBid3] = useState("");
  const [bid4, setBid4] = useState("");
  const [turn, setTurn] = useState(1);
  const [bidData, setBidData] = useState({ highBid: null, highBidder: null });

useEffect(() => {
  setBid1("")
  setBid2("")
  setBid3("")
  setBid4("")
  setBidData({ highBid: null, highBidder: null })
}, [bidOrder])
   
  // need to call this one bidder at a time in it's own object.
  // probably want a nested structure like 'Play' where each
  // CPU player has their own component
  // and then the human player has their component
  // *** consider rolling SelectSuit under that umbrella as well.

  let lastBid, lastBidder;
  let bidder = bidOrder[turn - 1];
  const bidOptions = ["Pass", "15", "20", "25", "30", "30 No Draw"];
  const dealer = bidOrder[3];

  switch (turn) {
    case 1: {
      if (bid1) {
        // setTimeout(() => {
          let { highBid, highBidder } = checkBid(bid1, bidData);
          // console.log("plays",highBid,highBidder)
          if (highBid) {
            setBidData({ highBid, highBidder });
            setTurn(2);
          } else {
            setTurn(2);
          }
        // }, 1000);
      }
      break;
    }
    case 2: {
      if (bid2) {
        // setTimeout(() => {
          let { highBid, highBidder } = checkBid(bid2, bidData);
          // console.log("plays",highBid,highBidder)
          if (highBid) {
            setBidData({ highBid, highBidder });
            setTurn(3);
          } else {
            setTurn(3);
          }
        // }, 1000);
      } else {
        lastBid = bid1.playerBid;
        lastBidder = bid1.bidder;
      }
      break;
    }
    case 3: {
      if (bid3) {
        // setTimeout(() => {
          let { highBid, highBidder } = checkBid(bid3, bidData);
          if (highBid) {
            setBidData({ highBid, highBidder });
            setTurn(4);
          } else {
            setTurn(4);
          }
        // }, 1000);
      } else {
        lastBid = bid2.playerBid;
        lastBidder = bid2.bidder;
      }
      break;
    }
    case 4: {
      if (bid4) {
        // setTimeout(() => {
          let { highBid, highBidder } = checkBid(bid4, bidData);
          if (highBid) {
            setBidData({ highBid, highBidder });
            setTurn(5);
          } else {
            setTurn(5);
          }
        // }, 1000);
      } else {
        lastBid = bid3.playerBid;
        lastBidder = bid3.bidder;
      }
      break;
    }
    case 5: {
      lastBid = bid4.playerBid;
      lastBidder = bid4.bidder;
      console.log("sendBid",bidData)
      sendBidData(bidData)
    }
  }

  // console.log("turn",turn);
  // console.log("lastBid", lastBid, lastBidder);
  // console.log("bidData", bidData);
  // console.log("bidInfo",[bid1,bid2,bid3,bid4])

  return (
    <div>
      {bidData.highBid && (
        <div>
          <div>
            High Bid: {bidData.highBidder} {bidData.highBid}
          </div>
        </div>
      )}
      {lastBidder && (
        <div>
          {/* TODO show the log of bids, may inform other players bids*/}
          <div>
            Last Bid: {lastBidder} {lastBid || "Pass"}
          </div>
        </div>
      )}
      {!bid1 && (
        <div>
          <div data-testid="firstBidder">{bidOrder[0]} to make first bid.</div>
        </div>
      )}
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
    </div>
  );
};

export default Bidding;
