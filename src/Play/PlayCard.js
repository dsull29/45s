const PlayCard = ({ card, player }) => {
  let cardName
  if (card) {
    cardName = card.value + " of " + card.suit;
  }
  return (
    <div>
      <div className="playermessagebox">
      <div className="playermessageboxheader">{player}</div>
      {card && (
        <div className="playerplayedcard">
          <img src={card.images.png} alt={cardName} width="30%" />
        </div>
      )}
    </div>
    </div>
  );
};

export default PlayCard;
