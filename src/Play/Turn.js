import { useState } from "react";
import useFetch from "../useFetch";
import { playCard } from "./playing";

const Turn = ({
  deckUrl,
  player,
  bookOrder,
  position,
  leadSuit,
  sendPlayCard,
  bidData,
  playedCards
}) => {
  const url = deckUrl + "/pile/" + player + "/list/";
  const { data, error, isPending } = useFetch(url);
  const [cardPlay, setCardPlay] = useState(null);

  var cards = [];

  if (data && !cardPlay) {
    cards = data.piles[player].cards;
    let taco = playCard(position, cards, bidData, leadSuit, playedCards, bookOrder, player);

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


