const PlayCard = ({ card, player }) => {
  return (
    <div className="playermessagebox">
        {card && (
          <div>
            <div className="playermessageboxheader">{player}</div>
            <div className="playerplayedcard">
            <img src={card.image} alt="Card" width="93px" /></div>
            </div>)}
      </div>
  );
};

export default PlayCard;
