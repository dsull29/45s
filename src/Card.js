const Card = ({ card }) => {
  return (
    <div className="cardslot">
      {card && <img src={card.image} alt="Card" width="100%" />}
    </div>
  );
};

export default Card;
