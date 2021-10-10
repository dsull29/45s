const Card = ({ card }) => {
  return (
    <div className="cardslot">
      <div>
      {card && <img src={card.image} alt="Card" height="104px" />}
      </div>
    </div>
  );
};

export default Card;
