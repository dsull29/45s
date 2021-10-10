import { useState } from "react";
import useFetch from "../useFetch";
import { playCardNow } from "../scripts";

const PlayerTurn = ({
  deckUrl,
  player,
  bookOrder,
  position,
  leadSuit,
  sendPlayCard,
  bidData,
  playedCards,
}) => {
  const [playerCard, setPlayerCard] = useState(0);

  const url = deckUrl + "/pile/" + player + "/list/";
  const { data, error, isPending } = useFetch(url);

  var cards = [];

  const handleSubmit = (e) => {
    e.preventDefault();
    playCardNow(deckUrl, cards[playerCard], sendPlayCard);
  };

  if (data) {
    cards = data.piles[player].cards;
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Thinking...</div>}
      {data && (
        <form onSubmit={handleSubmit}>
          <div className="playeraction">
            <div className="playeractionselect">
            Select card:&nbsp;&nbsp;
            <select
              value={playerCard}
              onChange={(e) => setPlayerCard(e.target.value)}
            >
              {cards[0] && <option value={0}>{cards[0].value + " of " + cards[0].suit}</option>}
              {cards[1] && <option value={1}>{cards[1].value + " of " + cards[1].suit}</option>}
              {cards[2] && <option value={2}>{cards[2].value + " of " + cards[2].suit}</option>}
              {cards[3] && <option value={3}>{cards[3].value + " of " + cards[3].suit}</option>}
              {cards[4] && <option value={4}>{cards[4].value + " of " + cards[4].suit}</option>}
            </select>
          </div>
          <div className="playeractionbutton">
            <button>Play Card</button>
          </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default PlayerTurn;
