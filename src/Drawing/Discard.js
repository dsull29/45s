import { useState } from "react";
import { getNewCards } from "../deckFuncs";
import "./index.css";
import useFetch from "./useFetch";

const Discard = ({ deckUrl, player, sendDiscardData }) => {
  const [discard0, setDiscard0] = useState(false);
  const [discard1, setDiscard1] = useState(false);
  const [discard2, setDiscard2] = useState(false);
  const [discard3, setDiscard3] = useState(false);
  const [discard4, setDiscard4] = useState(false);

  const { data, isPending, error } = useFetch(
    deckUrl + "/pile/" + player + "/list/"
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const discards = [discard0, discard1, discard2, discard3, discard4];
    var discardCodes = [];
    for (let i = 0; i < 5; i++) {
      discards[i] && discardCodes.push(data.piles[player].cards[i].code);
    }
    getNewCards(deckUrl, discardCodes, player, sendDiscardData);
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

export default Discard;
