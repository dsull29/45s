/** Display of bid information found on the discard and play views
 * @param  {Object} {bidData object of data related ot the bid
 * @param  {String} suit} Trump suit
 * @param  {Int} 
 */
const BidInfo = ({ bidData, suit, book }) => {

    var bid = bidData.highBid
    var bidder = bidData.highBidder

    return (
        <div>
            {!suit && <h3>{(bid + " from " + bidder + " in...")}</h3>}
            {suit && <h3>{(bid + " from " + bidder + " in " + suit)}</h3>}
            {book && <h4>Book: {book} </h4>}
        </div>
    );
}

export default BidInfo;