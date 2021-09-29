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
            <Card card={cards[0]} round={round} />
            <Card card={cards[1]} round={round} />
            <Card card={cards[2]} round={round} />
            <Card card={cards[3]} round={round} />
            <Card card={cards[4]} round={round} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hand;
