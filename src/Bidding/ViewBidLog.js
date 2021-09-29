// import "./play.css";

const ViewBidLog = ({ bids, bidOrder, bidData }) => {
  const bid1 = bids[0];
  const bid2 = bids[1];
  const bid3 = bids[2];
  const bid4 = bids[3];

  return (
    <div className="biddingwindow">
      <div className="windowheader">Bidding...</div>
      {!bid1 && <div className="bid">{bidOrder[0]} to make first bid.</div>}
      {bid1 && (
        <div className="bid">
          {bid1.bidder} bids {bid1.playerBid || "Pass"}
        </div>
      )}

      {bid2 && (
        <div className="bid">
          {bid2.bidder} bids {bid2.playerBid || "Pass"}
        </div>
      )}

      {bid3 && (
        <div className="bid">
          {bid3.bidder} bids {bid3.playerBid || "Pass"}
        </div>
      )}

      {bid4 && (
        <div className="bid">
          {bid4.bidder} bids {bid4.playerBid || "Pass"}
        </div>
      )}
    </div>
  );
};

export default ViewBidLog;
