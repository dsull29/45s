const PlayCard = ({ card }) => {
  return <div>{card && <img src={card.image} alt="Card" width="55%" />}</div>;
};

export default PlayCard;
