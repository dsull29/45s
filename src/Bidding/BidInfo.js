import "./bidding.css";

/** Display of bid information found on the discard and play views
 * @param  {Object} {bidData object of data related ot the bid
 * @param  {String} suit} Trump suit
 * @param  {Int}
 */
const BidInfo = ({ bidData }) => {
  return (
    <div className="playboardlog">
      <div className="playboardlogheader">Bid Info</div>
      <div className="playboardlogentry">Bid: {bidData.highBid} </div>
      <div className="playboardlogentry">Bidder: {bidData.highBidder}</div>
      <div className="playboardlogentry">Suit: {bidData.trumpSuit}</div>
    </div>
  );
};

export default BidInfo;
