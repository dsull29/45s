import { useEffect, useState } from "react";
import BidInfo from "../Bidding/BidInfo";
import { checkPlayerPosition } from "../Play/Play";
import Draw from "./Draw";
import DrawCpu from "./DrawCpu";
import ViewDraw from "./ViewDraw";

const Drawing = ({ deckUrl, roundOrder, bidData, sendDiscardData }) => {
  const [draw1, setDraw1] = useState("");
  const [draw2, setDraw2] = useState("");
  const [draw3, setDraw3] = useState("");
  const [draw4, setDraw4] = useState("");
  const [turn, setTurn] = useState(1);

  const player = "You";
  switch (turn) {
    case 1: {
      if (draw1) {
        setTurn(2);
      }
      break;
    }
    case 2: {
      if (draw2) {
        setTurn(3);
      }
      break;
    }
    case 3: {
      if (draw3) {
        setTurn(4);
      }
      break;
    }
    case 4: {
      if (draw4) {
        setTurn(5);
      }
      break;
    }
    case 5: {
      sendDiscardData(true);
    }
  }

  let drawer = roundOrder[turn - 1];
  function whoseRedraw(val, sendDraw) {
    if (checkPlayerPosition(player, roundOrder) === val) {
      return (
        <Draw
          deckUrl={deckUrl}
          drawer={drawer}
          trumpSuit={bidData.trumpSuit}
          sendDraw={sendDraw}
        />
      );
    } else {
      return (
        <DrawCpu
          deckUrl={deckUrl}
          drawer={drawer}
          trumpSuit={bidData.trumpSuit}
          sendDraw={sendDraw}
        />
      );
    }
  }

  const draws = [draw1, draw2, draw3, draw4];

  function getPlayerDraw(player, order) {
    let num = order.indexOf(player);
    return draws[num];
  }

  return (
    <div>
      <div className="playboard">
        <div className="playboardrow">
          <div className="playboardbox"></div>

          <div className="playboardbox">
            <ViewDraw
              draw={getPlayerDraw("Partner", roundOrder)}
              drawer="Partner"
            />
          </div>
          <div className="playboardbox"></div>
        </div>

        <div className="playboardrow">
          <div className="playboardbox">
            <ViewDraw
              draw={getPlayerDraw("Mario", roundOrder)}
              drawer="Mario"
            />
          </div>
          <div className="playboardbox"></div>
          <div className="playboardbox">
            <ViewDraw
              draw={getPlayerDraw("Luigi", roundOrder)}
              drawer="Luigi"
            />
          </div>
        </div>

        <div className="playboardrow">
          <div className="playboardboxlog">
            <BidInfo bidData={bidData} />
          </div>
          <div className="playboardbox">
            <ViewDraw draw={getPlayerDraw("You", roundOrder)} drawer="You" />
          </div>
          <div className="playboardbox"></div>
        </div>
      </div>

      <div className="playerwindow">
        {turn > 0 && !draw1 && whoseRedraw(1, setDraw1)}
        {turn > 1 && !draw2 && whoseRedraw(2, setDraw2)}
        {turn > 2 && !draw3 && whoseRedraw(3, setDraw3)}
        {turn > 3 && !draw4 && whoseRedraw(4, setDraw4)}
        {turn === 4 && draw4 && <div>Hey!</div>}
      </div>
    </div>
  );
};

export default Drawing;
