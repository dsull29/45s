import { useState } from "react";
import useFetch from "./useFetch";

const PlayerTurn = ({ deckUrl, player, position, leadSuit, sendPlayCard, trumpSuit }) => {

    const [playerCard, setPlayerCard] = useState("");
    const [playerSelected, setPlayerSelected] = useState(false);

    const url = deckUrl + "/pile/" + player + "/list/";
    const { data, error, isPending } = useFetch(url);

    var cards = [];

    const handleSubmit = (e) => {
        e.preventDefault();
        setPlayerSelected(true)
        console.log(playerCard)
    }
    console.log("log",data)

    if (data) {
        cards = data.piles[player].cards;
        console.log("pt",cards)
        if (playerSelected) {
            console.log("ps",playerCard)
            fetch(deckUrl + "/pile/discard/add/?cards=" + playerCard)
                .then(res => {
                    if (!res.ok) {
                        throw Error('Could not fetch data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    sendPlayCard(playerCard);
                });

        }
    }

    return (
        <div>
            {data &&
                <form onSubmit={handleSubmit}>
                    <select
                        value={playerCard}
                        onChange={(e) => setPlayerCard(e.target.value)}>
                        {cards[0] && <option value={cards[0].code}>{cards[0].code}</option>}
                        {cards[1] && <option value={cards[1].code}>{cards[1].code}</option>}
                        {cards[2] && <option value={cards[2].code}>{cards[2].code}</option>}
                        {cards[3] && <option value={cards[3].code}>{cards[3].code}</option>}
                        {cards[4] && <option value={cards[4].code}>{cards[4].code}</option>}
                    </select>
                    <button>Play Card</button>
                </form>}
        </div>
    );
}

export default PlayerTurn;