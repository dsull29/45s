import { useEffect, useState } from "react";
import { dealHands } from "./deckFuncs";
import { getCardValue } from "./cardValues";
import Bidding from "./Bidding/Bidding";
import Play from "./Play/Play";
import Drawing from "./Drawing/Drawing";
import PlayWinner from "./Play/PlayWinner";
import ViewTable from "./ViewTable";

const Round = ({ deckUrl, round, sendRoundScore, newRound }) => {
  const [isPending, setIsPending] = useState(true);
  const [bidData, setBidData] = useState("");
  const [stage, setStage] = useState("Deal");
  const [discardData, setDiscardData] = useState(false);
  const [bookInfo, setBookInfo] = useState(null);
  const [bookNum, setBookNum] = useState(1);
  const [log, setLog] = useState([]);
  const [roundOrder, setRoundOrder] = useState(null);

  // const order = ["You", "Mario", "Partner", "Luigi"];

  // TODO look into a way to reset states without having todo this...
  if (newRound && stage === "Over") {
    setIsPending(true);
    setBidData("");
    setStage("Deal");
    setDiscardData(false);
    setBookInfo(null);
    setBookNum(1);
    setLog([]);
    setRoundOrder(null);
    console.log("wipe");
  }

  const player = "You";

  useEffect(() => {
    dealHands(deckUrl, round, setIsPending, setRoundOrder);
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
    <div>
      {stage === "Deal" && isPending && (
        <div className="gamewindow loading">Dealing....</div>
      )}
      {stage === "Bid" && roundOrder && (
        <div>
          <Bidding
            deckUrl={deckUrl}
            bidOrder={roundOrder}
            sendBidData={setBidData}
          />
        </div>
      )}
      {stage === "Discard" && (
        <div>
          <Drawing
            deckUrl={deckUrl}
            roundOrder={roundOrder}
            bidData={bidData}
            sendDiscardData={setDiscardData}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 1 && (
        <div>
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            bookInfo={log}
            bidData={bidData}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 2 && (
        <div>
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            bookInfo={log}
            bidData={bidData}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 3 && (
        <div>
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            bookInfo={log}
            bidData={bidData}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 4 && (
        <div>
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            bookInfo={log}
            bidData={bidData}
          />
        </div>
      )}

      {stage === "Play" && bookNum === 5 && (
        <div>
          <Play
            deckUrl={deckUrl}
            player={player}
            order={roundOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            bookInfo={log}
            bidData={bidData}
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
