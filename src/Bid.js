import { useEffect, useState } from 'react';
import { bidding } from './scripts';

const Bid = ({ hands, order, dealer, sendBidData }) => {
    const [playerBidded, setPlayerBidded] = useState(false);
    const [playerBid, setPlayerBid] = useState("Take");
    const [highBid, setHighBid] = useState("");
    const [highBidder, setHighBidder] = useState("");

    const player = "player1";
    console.log("dealer:",dealer)
    var isDealer = (player === dealer)

    useEffect(() => {
        var bidRes = bidding(hands, order)
        if (bidRes.highBid) {
            setHighBid(bidRes.highBid);
            setHighBidder(bidRes.highBidder);
        }
    }, [hands, order])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (playerBid === "Take") {
            setHighBidder(player);
        } else if (playerBid !== "Pass") {
            setHighBid(playerBid);
            setHighBidder(player);
        }
        setPlayerBidded(true)
    }

    if (playerBidded) {
        sendBidData({
            highBid: { highBid },
            highBidder: { highBidder }
        })
    }

    return (
        <div className="bid">
            <div className="currentBid">{highBid} from {highBidder}</div>
            {/* {trumpSelected && <div>in {trumpSuit} </div>} */}
            {!playerBidded && <div>
                <form onSubmit={handleSubmit}>
                    <select
                        value={playerBid}
                        onChange={(e) => setPlayerBid(e.target.value)}>
                        {isDealer && <option value="Take">Take</option>}
                        <option value="Pass">Pass</option>
                        {highBid === null && <option value="15">15</option>}
                        {highBid === "15" && <option value="20">20</option>}
                        <option value="25">25</option>
                        <option value="30">30</option>
                        <option value="30No">30 No Draw</option>
                    </select>
                    <button>Place Bid</button>
                </form>
            </div>}
        </div>
    );
}

export default Bid;