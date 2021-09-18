import { useState } from "react";
import useFetch from "./useFetch";
import { playCardNow } from "./scripts";

const PlayerTurn = ({
  deckUrl,
  player,
  position,
  leadSuit,
  sendPlayCard,
  trumpSuit,
}) => {
  const [playerCard, setPlayerCard] = useState(0);

  const url = deckUrl + "/pile/" + player + "/list/";
  const { data, error, isPending } = useFetch(url);

  var cards = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("nachos", playerCard, e);
    playCardNow(deckUrl, cards[playerCard], sendPlayCard);
  };

  if (data) {
    cards = data.piles[player].cards;
  }

//   if (cards[0] && !playerCard) {
//     // setPlayerCard(cards[0]);
//     setPlayerCard(0);
//   }

  // console.log("PC",playerCard)
  return (
    <div>
      {data && (
        <form onSubmit={handleSubmit}>
          <select
            value={playerCard}
            onChange={(e) => setPlayerCard(e.target.value)}
          >
            {cards[0] && <option value={0}>{cards[0].code}</option>}
            {cards[1] && <option value={1}>{cards[1].code}</option>}
            {cards[2] && <option value={2}>{cards[2].code}</option>}
            {cards[3] && <option value={3}>{cards[3].code}</option>}
            {cards[4] && <option value={4}>{cards[4].code}</option>}
          </select>
          <button>Play Card</button>
        </form>
      )}
    </div>
  );
};

export default PlayerTurn;
