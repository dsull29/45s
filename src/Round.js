import { useEffect, useState } from "react";
import Hand from "./Hand";
import { dealHands } from "./deckFuncs";
import SelectSuit from "./Bidding/SelectSuit";
import BidInfo from "./Bidding/BidInfo";
import Play from "./Play/Play";
import { getCardValue } from "./cardValues";
import Bidding from "./Bidding/Bidding";
import Drawing from "./Drawing/Drawing";
import PlayWinner from "./Play/PlayWinner";

const Round = ({ deckUrl, round, sendRoundScore, newRound }) => {
  const [hands, setHands] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [bidData, setBidData] = useState("");
  const [stage, setStage] = useState("Deal");
  // const [trumpSuit, setTrumpSuit] = useState("");
  const [discardData, setDiscardData] = useState(false);
  const [bookInfo, setBookInfo] = useState(null);
  const [bookNum, setBookNum] = useState(1);
  const [log, setLog] = useState([]);
  const [roundOrder, setRoundOrder] = useState(null);

  const order = ["You", "Mario", "Partner", "Luigi"];

  // TODO look into a way to reset states without having todo this...
  if (newRound && stage === "Over") {
    setHands(null);
    setIsPending(true);
    setBidData("");
    setStage("Deal");
    // setTrumpSuit("");
    setDiscardData(false);
    setBookInfo(null);
    setBookNum(1);
    setLog([]);
    setRoundOrder(null);
    console.log("wipe");
  }

  const player = "You";
  const dealer = order[(round - 1) % 4];

  useEffect(() => {
    // console.log("loopeffect",deckUrl,round)
      dealHands(deckUrl, round, setIsPending, setHands, setRoundOrder);
  }, [deckUrl, round]);

  if (deckUrl && stage === "Deal" && !isPending) {
    setStage("Bid");
  }

  if (bidData && stage === "Bid" && !isPending) {
    setStage("Discard");
  }

  if (discardData && stage === "Discard") {
    setStage("Play");
  }

  if (bookInfo) {
    log[bookNum - 1] = bookInfo;
    setLog(log);
    setBookInfo("");
    setBookNum(bookNum + 1);
  }

  if (stage === "Play" && log.length === 5) {
    setStage("Winner");
    setBookNum(0);
  }

  let team1BookCount = 0;
  let team2BookCount = 0;

  if (stage === "Winner") {
    let highCard = 50;
    let highCardWinner = null;

    for (let x = 0; x < 5; x++) {
      if (
        log[x].winningPlayer === "You" ||
        log[x].winningPlayer === "Partner"
      ) {
        team1BookCount += 1;
      } else {
        team2BookCount += 1;
      }
      let cardValue = getCardValue(log[x].highCard, bidData.trumpSuit);
      if (highCard > cardValue) {
        highCard = cardValue;
        highCardWinner = log[x].winningPlayer;
      }
    }
    if (highCardWinner === "You" || highCardWinner === "Partner") {
      team1BookCount += 1;
    } else {
      team2BookCount += 1;
    }

    if (team1BookCount === 6) {
      team1BookCount = 9;
    }

    if (team2BookCount === 6) {
      team2BookCount = 9;
    }

    // TODO clean this up and turn it into a function
    let bid = bidData.highBid;
    if (bidData.highBidder === "You" || bidData.highBidder === "Partner") {
      if (bid === "15" && team1BookCount < 3) {
        team1BookCount = 0 - 3;
      } else if (bid === "20" && team1BookCount < 4) {
        team1BookCount = 0 - 4;
      } else if (bid === "25" && team1BookCount < 5) {
        team1BookCount = 0 - 5;
      } else if (bid === "30" && team1BookCount < 6) {
        team1BookCount = 0 - 6;
      } else if (bid === "30No" && team2BookCount < 6) {
        team1BookCount = 0 - 12;
      }
    } else {
      if (bid === "15" && team2BookCount < 3) {
        team2BookCount = 0 - 3;
      } else if (bid === "20" && team2BookCount < 4) {
        team2BookCount = 0 - 4;
      } else if (bid === "25" && team2BookCount < 5) {
        team2BookCount = 0 - 5;
      } else if (bid === "30" && team2BookCount < 6) {
        team2BookCount = 0 - 6;
      } else if (bid === "30No" && team2BookCount < 6) {
        team2BookCount = 0 - 12;
      }
    }
  }

  return (
    <div className="content">
      {stage === "Deal" && isPending && <div>Dealing....</div>}
      {/* {console.log("bida", stage, hands)} */}
      {stage === "Bid" && hands && roundOrder && (
        <div>
          <Bidding
            deckUrl={deckUrl}
            bidOrder={roundOrder}
            sendBidData={setBidData}
          />
        </div>
      )}
      {/* {stage === "SuitSelect" && (
        <div>
          <BidInfo bidData={bidData} />
          <SelectSuit
            deckUrl={deckUrl}
            bidData={bidData}
            sendTrumpSuit={setTrumpSuit}
          />
        </div>
      )} */}
      {stage === "Discard" && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} />
          <Drawing
            deckUrl={deckUrl}
            roundOrder={roundOrder}
            trumpSuit={bidData.trumpSuit}
            sendDiscardData={setDiscardData}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 1 && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} book={bookNum} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={bidData.trumpSuit}
            bookInfo={log}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 2 && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} book={bookNum} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={bidData.trumpSuit}
            bookInfo={log}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 3 && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} book={bookNum} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={bidData.trumpSuit}
            bookInfo={log}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 4 && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} book={bookNum} />

          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={bidData.trumpSuit}
            bookInfo={log}
          />
        </div>
      )}

      {stage === "Play" && bookNum === 5 && (
        <div>
          <BidInfo bidData={bidData} suit={bidData.trumpSuit} book={bookNum} />

          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={bidData.trumpSuit}
            bookInfo={log}
          />
        </div>
      )}

      {stage === "Winner" && (
        <PlayWinner
          team1={team1BookCount}
          team2={team2BookCount}
          sendRoundScore={sendRoundScore}
          sendStage={setStage}
        />
      )}
    </div>
  );
};

export default Round;
