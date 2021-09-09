const BidInfo = ({ bidData, suit }) => {

    var bid = bidData.highBid.highBid
    var bidder = bidData.highBidder.highBidder

    return (
        <div>
            {!suit && <h3>{(bid + " from " + bidder + " in...")}</h3>}
            {suit && <h3>{(bid + " from " + bidder + " in " + suit)}</h3>}
        </div>
    );
}

export default BidInfo;