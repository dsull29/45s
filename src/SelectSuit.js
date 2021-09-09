import { useState } from "react";

const SelectSuit = ({ highBidder, sendTrumpSuit }) => {
    const [trumpSuit, setTrumpSuit] = useState("Hearts");

    const handleSuitSubmit = (e) => {
        e.preventDefault();
        sendTrumpSuit(trumpSuit)
    };

    return (
        <div>
            {highBidder === "player1" &&
                <div>
                    <form onSubmit={handleSuitSubmit}>
                        <select
                            value={trumpSuit}
                            onChange={(e) => setTrumpSuit(e.target.value)}>
                            <option value="Hearts">Hearts</option>
                            <option value="Diamonds">Diamonds</option>
                            <option value="Spades">Spades</option>
                            <option value="Clubs">Clubs</option>
                        </select>
                        <button>Select Suit</button>
                    </form>
                </div>}
        </div>)
}

export default SelectSuit;