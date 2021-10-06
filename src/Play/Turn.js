import { useState } from "react";
import { getBestCard, getWorstCard } from "../scripts";
import useFetch from "../useFetch";

const Turn = ({
  deckUrl,
  player,
  position,
  leadSuit,
  sendPlayCard,
  trumpSuit,
}) => {
  const url = deckUrl + "/pile/" + player + "/list/";
  const { data, error, isPending } = useFetch(url);
  const [cardPlay, setCardPlay] = useState(null);

  var cards = [];

  if (data && !cardPlay) {
    cards = data.piles[player].cards;
    let taco = playCard(position, cards, trumpSuit, leadSuit);

    fetch(deckUrl + "/pile/discard/add/?cards=" + taco.code)
      .then((res) => {
        if (!res.ok) {
          throw Error("Could not fetch data for that resource");
        }
        return res.json();
      })
      .then((data) => {
        setCardPlay(taco);
      });
  }

  if (data && cardPlay) {
    sendPlayCard(cardPlay);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Thinking...</div>}
      {data && <div>Data</div>}
    </div>
  );
};

export default Turn;

function playCard(position, cards, trumpSuit, leadSuit) {
  var card;
  switch (position) {
    case 1:
      card = getWorstCard(cards, trumpSuit);
      break;
    case 2:
      card = getWorstCard(cards, trumpSuit, leadSuit);
      break;
    case 3:
      card = getBestCard(cards, trumpSuit, leadSuit);
      break;
    case 4:
      card = getBestCard(cards, trumpSuit, leadSuit);
      break;
    default:
      console.log("defaultHit");
  }
  return card;
}
