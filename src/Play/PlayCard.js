const PlayCard = ({ card }) => {

    return (
        <div>
            <img src={card.image} alt="Card" width="100%" height="100%" />
        </div>

    );
}

export default PlayCard;