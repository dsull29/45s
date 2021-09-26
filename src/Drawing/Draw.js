import { useState } from "react";
import { getNewCards } from "../deckFuncs";
import useFetch from "../useFetch";

const Draw = ({ deckUrl, drawer, trumpSuit, sendDraw }) => {
  const [discard0, setDiscard0] = useState(false);
  const [discard1, setDiscard1] = useState(false);
  const [discard2, setDiscard2] = useState(false);
  const [discard3, setDiscard3] = useState(false);
  const [discard4, setDiscard4] = useState(false);
  const [discardPending,setDiscardPending] = useState(true)

  const url = deckUrl + "/pile/" + drawer + "/list/";
  const { data, error, isPending } = useFetch(url);

  const handleSubmit = (e) => {
    e.preventDefault();
    const discards = [discard0, discard1, discard2, discard3, discard4];
    let discardCodes = [];
    for (let i = 0; i < 5; i++) {
      discards[i] && discardCodes.push(data.piles[drawer].cards[i].code);
    }
    getNewCards(deckUrl, discardCodes, drawer, sendDraw,setDiscardPending);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="discardHand">
        <input
          type="checkbox"
          name="card0"
          onChange={(e) => setDiscard0(e.target.checked)}
          checked={discard0}
          className="dischardCheckBox"
        ></input>
        <input
          type="checkbox"
          name="card1"
          onChange={(e) => setDiscard1(e.target.checked)}
          checked={discard1}
        ></input>
        <input
          type="checkbox"
          name="card2"
          onClick={(e) => setDiscard2(e.target.checked)}
          checked={discard2}
        ></input>
        <input
          type="checkbox"
          name="card3"
          onChange={(e) => setDiscard3(e.target.checked)}
          checked={discard3}
        ></input>
        <input
          type="checkbox"
          name="card4"
          onChange={(e) => setDiscard4(e.target.checked)}
          checked={discard4}
        ></input>
      </div>
      <button>Discard Selected</button>
    </form>
  );
};

export default Draw;
