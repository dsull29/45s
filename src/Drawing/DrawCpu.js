import { useEffect, useState } from "react";
import { getNewCards } from "../deckFuncs";
import useFetch from "../useFetch";

const DrawCpu = ({ deckUrl, drawer, trumpSuit, sendDraw }) => {
  const [discardCount, setDiscardCount] = useState(null);
  const [discardPending, setDiscardPending] = useState(true);
  const url = deckUrl + "/pile/" + drawer + "/list/";
  const { data, error, isPending } = useFetch(url);

  useEffect(() => {
    if (data) {
      let card;
      let cards = data.piles[drawer].cards;
      let discardCodes = [];

      for (card of cards) {
        if (card.code !== "AH" && card.code.charAt(1) !== trumpSuit.charAt(0)) {
          discardCodes.push(card.code);
        }
      }
      getNewCards(
        deckUrl,
        discardCodes,
        drawer,
        setDiscardCount,
        setDiscardPending
      );
    }
  }, [deckUrl, drawer, trumpSuit, data]);

  if (data && discardCount && !discardPending) {
    sendDraw(discardCount);
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Thinking....</div>}
      {data && <div>Done</div>};
    </div>
  );
};

export default DrawCpu;
