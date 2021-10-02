import "./bidding.css";

/** Display of bid information found on the discard and play views
 * @param  {Object} {bidData object of data related ot the bid
 * @param  {String} suit} Trump suit
 * @param  {Int}
 */
const BidInfo = ({ bidData }) => {
  return (
    <div className="bidInfo">
      <div className="bidInfoBox">Bid Info</div>
      <div className="bidInfoBox">Bid: {bidData.highBid} </div>
      <div className="bidInfoBox">Bidder: {bidData.highBidder}</div>
      <div className="bidInfoBox">Suit: {bidData.trumpSuit}</div>
    </div>
  );
};

export default BidInfo;
