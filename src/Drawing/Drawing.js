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
  
  const player = "player1";
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
      <div>
        {turn > 0 && !draw1 && whoseRedraw(1, setDraw1)}
        {turn > 1 && !draw2 && whoseRedraw(2, setDraw2)}
        {turn > 2 && !draw3 && whoseRedraw(3, setDraw3)}
        {turn > 3 && !draw4 && whoseRedraw(4, setDraw4)}
        {turn === 4 && draw4 && <div>Hey!</div>}
      </div>
      <div>
        {draw1 && <div>{roundOrder[0]} draws {draw1}</div>}
        {draw2 && <div>{roundOrder[1]} draws {draw2}</div>}
        {draw3 && <div>{roundOrder[2]} draws {draw3}</div>}
        {draw4 && <div>{roundOrder[3]} draws {draw4}</div>}
      </div>
    </div>
  );
};

export default Drawing;
