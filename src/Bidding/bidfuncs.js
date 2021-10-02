export const checkBid = (bid, bidData) => {
  // console.log("incheckBid",bid,bidData)
  let highBid, highBidder, suit;
  if (bid.playerBid === "Pass") {
    // return {null, null};
  } else if (bid.playerBid === "Take") {
    highBid = bidData.highBid;
    highBidder = bid.bidder;
  } else if (bid.playerBid) {
    highBid = bid.playerBid;
    highBidder = bid.bidder;
  }

  return { highBid, highBidder };
};

/** Gets the players bid based on an evaluation of their hand and prev bids this round
 * @param  {Array} handValues array of hand evaluations relative to suits
 * @param  {Object} bidData {highBid: highest bid made so far
 *                           highBidder: player who made the highest bid}
 * @returns player's bid
 */
export function getBid(handValues, bidData, isDealer) {
  const bidOptions = ["Pass", "15", "20", "25", "30", "30 No Draw"];
  var bestHandVal = handValues.sort((a, b) => {
    return a - b;
  })[0];
  var playerBid = null;

  // the lower the hand value the better, which makes the comparators the floor
  // TODO this bid thresholds are abirtrary. try to get a better handle on what
  //   these look like
  // TODO needs an exception where if the player is dealer they can take the bid

  if (bestHandVal < 0 - 80) {
    playerBid = "30";
  } else if (bestHandVal < 0 - 60) {
    playerBid = "25";
  } else if (bestHandVal < 0 - 45) {
    playerBid = "20";
  } else if (bestHandVal < 0 - 34) {
    playerBid = "15";
  }

  if (
    playerBid &&
    bidOptions.indexOf(playerBid) <= bidOptions.indexOf(bidData.highBid)
  ) {
    if (isDealer) {
      playerBid = "Take";
    } else {
      playerBid = "Pass";
    }
  }

  return playerBid;
}

export function getBestSuit(handValues) {
  let suit;
  const orgHandValues = JSON.stringify(handValues);
  const bestHandVal = handValues.sort(function (a, b) {
    return a - b;
  })[0];

  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
  const suitNum = JSON.parse(orgHandValues).indexOf(bestHandVal);
  suit = suits[suitNum];
  return suit;
}
