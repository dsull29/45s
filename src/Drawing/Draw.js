import { useState } from "react";
import { getNewCards } from "../deckFuncs";
import useFetch from "../useFetch";
import "./drawing.css";

const Draw = ({ deckUrl, drawer, trumpSuit, sendDraw }) => {
  const [discard0, setDiscard0] = useState(false);
  const [discard1, setDiscard1] = useState(false);
  const [discard2, setDiscard2] = useState(false);
  const [discard3, setDiscard3] = useState(false);
  const [discard4, setDiscard4] = useState(false);
  const [discardPending, setDiscardPending] = useState(true);

  const url = deckUrl + "/pile/" + drawer + "/list/";
  const { data, error, isPending } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    const discards = [discard0, discard1, discard2, discard3, discard4];
    let discardCodes = [];
    for (let i = 0; i < 5; i++) {
      discards[i] && discardCodes.push(data.piles[drawer].cards[i].code);
    }
    getNewCards(deckUrl, discardCodes, drawer, sendDraw, setDiscardPending);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Thinking...</div>}
      {data && (
        <form onSubmit={handleSubmit}>
          <div className="discardhandwindow">
            Select cards to discard:
            <div className="discardHand">
              <div className="discardbox">
                <input
                  type="checkbox"
                  name="card0"
                  onChange={(e) => setDiscard0(e.target.checked)}
                  checked={discard0}
                ></input>
              </div>
              <div className="discardbox">
                <input
                  type="checkbox"
                  name="card1"
                  onChange={(e) => setDiscard1(e.target.checked)}
                  checked={discard1}
                ></input>
              </div>
              <div className="discardbox">
                <input
                  type="checkbox"
                  name="card2"
                  onChange={(e) => setDiscard2(e.target.checked)}
                  checked={discard2}
                ></input>
              </div>
              <div className="discardbox">
                <input
                  type="checkbox"
                  name="card3"
                  onChange={(e) => setDiscard3(e.target.checked)}
                  checked={discard3}
                ></input>
              </div>
              <div className="discardbox">
                <input
                  type="checkbox"
                  name="card4"
                  onChange={(e) => setDiscard4(e.target.checked)}
                  checked={discard4}
                ></input>
              </div>
            </div>
            <div className="playeraction">
              <button>Discard Selected</button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default Draw;
