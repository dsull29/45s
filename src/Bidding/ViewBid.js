const ViewBid = ({ bid, bidder }) => {
  console.log("ViewBid", bid);

  return (
    <div className="playermessagebox">
      {bid && (
        <div>
          <div className="playermessageboxheader">{bid.bidder}</div>
          <div className="playermessageboxtext">{bid.playerBid || "Pass"}</div>
        </div>
      )}
      {!bid && bidder !== "You" && (
        <div>
          <div className="playermessageboxheader">{bidder}</div>
          <div className="playermessageboxtext">&nbsp;</div>
        </div>
      )}
      {!bid && bidder === "You" && (
        <div>
          <div className="playermessageboxheader">You</div>
          <div className="playermessageboxtext">We're waiting!</div>
        </div>
      )}
    </div>
  );
};

export default ViewBid;
