import { useEffect, useState } from "react";
import { checkPlayerPosition } from "../Play/Play";
import Draw from "./Draw";
import DrawCpu from "./DrawCpu";

const Drawing = ({ deckUrl, roundOrder, trumpSuit, sendDiscardData }) => {
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
          trumpSuit={trumpSuit}
          sendDraw={sendDraw}
        />
      );
    } else {
      return (
        <DrawCpu
          deckUrl={deckUrl}
          drawer={drawer}
          trumpSuit={trumpSuit}
          sendDraw={sendDraw}
        />
      );
    }
  }

  return (
    <div>
      <div className="biddingwindow">
        <div className="windowheader">Drawing...</div>
        {draw1 && (
          <div className="bid">
            {roundOrder[0]} draws {draw1}
          </div>
        )}
        {draw2 && (
          <div className="bid">
            {roundOrder[1]} draws {draw2}
          </div>
        )}
        {draw3 && (
          <div className="bid">
            {roundOrder[2]} draws {draw3}
          </div>
        )}
        {draw4 && (
          <div className="bid">
            {roundOrder[3]} draws {draw4}
          </div>
        )}
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
