const PlayCard = ({ card}) => {

    return (
        <div>
            {card && <img src={card.image} alt="Card" height="150px" />}
        </div>

    );
}

export default PlayCard;