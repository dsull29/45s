import { useState } from "react";
import useFetch from "./useFetch";
import Hand from "./Hand";
import Bid from "./Bid";
import { dealHand } from "./deckFuncs";
import SelectSuit from "./SelectSuit";
import Discard from "./Discard";
import BidInfo from "./BidInfo";
import Play from "./Play";
import { getCardValue } from "./cardValues";

const Round = ({ round, sendRoundScore, newRound }) => {
  const [hands, setHands] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [bidData, setBidData] = useState("");
  const [stage, setStage] = useState("Deal");
  const [trumpSuit, setTrumpSuit] = useState("");
  const [discardData, setDiscardData] = useState("");
  const [bookInfo, setBookInfo] = useState(null);
  const [bookNum, setBookNum] = useState(1);
  const [log, setLog] = useState([]);

  if (newRound && stage === "Over") {
    setHands(null);
    setIsPending(true);
    setBidData("");
    setStage("Deal");
    setTrumpSuit("");
    setDiscardData("");
    setBookInfo(null);
    setBookNum(1);
    setLog([]);
    console.log("wipe")
   
  }

  var player = "player1";

  const { data, error } = useFetch(
    "https://deckofcardsapi.com/api/deck/new/draw/?count=20"
  );
  var deckUrl = null;

  if (data) {
    deckUrl = "https://deckofcardsapi.com/api/deck/" + data.deck_id;
  }

  const order = ["player1", "player2", "player3", "player4"];
  const dealer = order[(round - 1) % 4];
  const turnOrder = getTurnOrder(bookInfo);

  function getTurnOrder(bookInfo) {
    var val;
    if (!bookInfo) {
      val = ["player2", "player3", "player4", "player1"];
    } else {
      val = null;
    }
    return val;
  }

  if (data && stage === "Deal") {
    let handRes = dealHand(data.cards);
    setHands(handRes);
    fetch(
      deckUrl + "/pile/" + order[0] + "/add/?cards=" + handRes[0].toString()
    )
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        return fetch(
          deckUrl + "/pile/" + order[1] + "/add/?cards=" + handRes[1].toString()
        );
      })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        return fetch(
          deckUrl + "/pile/" + order[2] + "/add/?cards=" + handRes[2].toString()
        );
      })
      .then(function (response) {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .then((data) => {
        return fetch(
          deckUrl + "/pile/" + order[3] + "/add/?cards=" + handRes[3].toString()
        );
      })
      .then(function (response) {
        if (response.ok) {
          setIsPending(false);
          return response.json();
        } else {
          return Promise.reject(response);
        }
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
        }
      });
    setStage("Bid");
  }

  if (bidData && stage === "Bid") {
    setStage("SuitSelect");
  }

  if (trumpSuit && stage === "SuitSelect") {
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
    setStage("Winner")
    setBookNum(0);
  }

  let team1BookCount = 0;
  let team2BookCount = 0;

  if (stage === "Winner") {
    let highCard = 50;
    let highCardWinner = null;

    for (let x = 0; x < 5; x++) {
      if (log[x].winner === 1 || log[x].winner === 3) {
        team1BookCount += 1;
      } else {
        team2BookCount += 1;
      }
      let cardValue = getCardValue(log[x].highCard, trumpSuit);
      if (highCard > cardValue) {
        highCard = cardValue;
        highCardWinner = log[x].winner;
      }
    }
    if (highCardWinner === 1 || highCardWinner === 3) {
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
    console.log("roundWinner:",team1BookCount,team2BookCount)
//    sendRoundScore([team1BookCount, team2BookCount]);
    
}
 console.log("stageBook",stage,bookNum,round)
  return (
    <div className="content">
      {stage === "Deal" && isPending && <div>Dealing....</div>}
      {stage === "Bid" && (
        <div>
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Bid
            hands={hands}
            order={order}
            dealer={dealer}
            sendBidData={setBidData}
          />
        </div>
      )}
      {stage === "SuitSelect" && (
        <div>
          <BidInfo bidData={bidData} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <SelectSuit
            highBidder={bidData.highBidder.highBidder}
            sendTrumpSuit={setTrumpSuit}
          />
        </div>
      )}
      {stage === "Discard" && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Discard
            deckUrl={deckUrl}
            player={player}
            sendDiscardData={setDiscardData}
          />
        </div>
      )}
      {stage === "Redraw" && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} />
          <div>{discardData.toString()}</div>
        </div>
      )}
      {stage === "Play" && bookNum === 1 && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={turnOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={trumpSuit}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 2 && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={turnOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={trumpSuit}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 3 && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={turnOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={trumpSuit}
          />
        </div>
      )}
      {stage === "Play" && bookNum === 4 && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={turnOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={trumpSuit}
          />
        </div>
      )}

      {stage === "Play" && bookNum === 5 && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <Hand deckUrl={deckUrl} player={player} stage={stage} />
          <Play
            deckUrl={deckUrl}
            player={player}
            order={turnOrder}
            sendBookInfo={setBookInfo}
            book={bookNum}
            trumpSuit={trumpSuit}
          />
        </div>
      )}

      {stage === "Winner" && (
        <div>
          <BidInfo bidData={bidData} suit={trumpSuit} book={bookNum} />
          <div>Round Over! </div>
          <div>Team 1: {team1BookCount }</div>
          <div>Team 2: {team2BookCount }</div>
            <button onClick={() => { sendRoundScore([team1BookCount, team2BookCount]);
                                     setStage("Over")}}>Next Round</button>
        </div>
      )}
    </div>
  );
};

export default Round;
