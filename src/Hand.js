import useFetch from "./useFetch";
import Card from "./Card";

const Hand = ({ deckUrl, player, round }) => {
  const { data, isPending, error } = useFetch(
    deckUrl + "/pile/" + player + "/list/"
  );
  var cards = [];
  if (data && data.piles[player] && data.piles[player].cards) {
    cards = data.piles[player].cards;
  }

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {data && cards && (
        <div className="handwindow">
          <div className="hand">
            {cards[0] && <Card card={cards[0]} round={round} />}
            {cards[1] && <Card card={cards[1]} round={round} />}
            {cards[2] && <Card card={cards[2]} round={round} />}
            {cards[3] && <Card card={cards[3]} round={round} />}
            {cards[4] && <Card card={cards[4]} round={round} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hand;
