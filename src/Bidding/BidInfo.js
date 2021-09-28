import "./bidding.css";

/** Display of bid information found on the discard and play views
 * @param  {Object} {bidData object of data related ot the bid
 * @param  {String} suit} Trump suit
 * @param  {Int}
 */
const BidInfo = ({ bidData, suit, book }) => {
  var bid = bidData.highBid;
  var bidder = bidData.highBidder;

  return (
    <div className="bidstripe">
        {!suit && (
          <div className="bidinfo">{bid + " from " + bidder + " in..."}</div>
        )}
        {suit && (
          <div className="bidinfo">
            {bid + " from " + bidder + " in " + suit}
          </div>
        )}
      </div>
  );
};

export default BidInfo;
