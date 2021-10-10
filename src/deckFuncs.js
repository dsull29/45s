export async function dealHands(deckUrl, round, setIsPending, setRoundOrder) {
  const order = getRoundOrder(round);
  await fetch(deckUrl + "/shuffle/");
  const drawresponse = await fetch(deckUrl + "/draw/?count=20");
  const drawData = await drawresponse.json();
  let hands = hash(drawData.cards);
  console.log("handCheck", hands, drawData);
  await fetch(
    deckUrl + "/pile/" + order[0] + "/add/?cards=" + hands[0].toString()
  );
  await fetch(
    deckUrl + "/pile/" + order[1] + "/add/?cards=" + hands[1].toString()
  );
  await fetch(
    deckUrl + "/pile/" + order[2] + "/add/?cards=" + hands[2].toString()
  );
  const done = await fetch(
    deckUrl + "/pile/" + order[3] + "/add/?cards=" + hands[3].toString()
  );
  if (done) {
    setRoundOrder(order);
    setIsPending(false);
  }
}

function hash(cards) {
  const hand1 = [
    cards[0].code,
    cards[1].code,
    cards[2].code,
    cards[12].code,
    cards[13].code,
  ];
  const hand2 = [
    cards[3].code,
    cards[4].code,
    cards[5].code,
    cards[14].code,
    cards[15].code,
  ];
  const hand3 = [
    cards[6].code,
    cards[7].code,
    cards[8].code,
    cards[16].code,
    cards[17].code,
  ];
  const hand4 = [
    cards[9].code,
    cards[10].code,
    cards[11].code,
    cards[18].code,
    cards[19].code,
  ];
  return [hand1, hand2, hand3, hand4];
}

export function getRoundOrder(round) {
  let val = (round - 1) % 4;
  let order;
  if (val === 0) {
    order = ["Mario", "Partner", "Luigi", "You"];
  } else if (val === 1) {
    order = ["Partner", "Luigi", "You", "Mario"];
  } else if (val === 2) {
    order = ["Luigi", "You", "Mario", "Partner"];
  } else if (val === 3) {
    order = ["You", "Mario", "Partner", "Luigi"];
  }
  return order;
} // module.exports = { dealHand, asyncCall};

/** Get's the order relative to the last player to win a hand
 ** The player who won the last book goes first
 * @param  {String} lastWinner name of the last player to win a book
 */
export function getBookOrder(mung, roundOrder) {
  let order = [];
  let lastBook = mung[mung.length - 1];
  let lastWinner;
  if (lastBook) {
    lastWinner = lastBook.winningPlayer;
  }
  if (lastWinner === "Mario") {
    order = ["Mario", "Partner", "Luigi", "You"];
  } else if (lastWinner === "Partner") {
    order = ["Partner", "Luigi", "You", "Mario"];
  } else if (lastWinner === "Luigi") {
    order = ["Luigi", "You", "Mario", "Partner"];
  } else if (lastWinner === "You") {
    order = ["You", "Mario", "Partner", "Luigi"];
  } else {
    order = roundOrder;
  }
  return order;
}

/** Handles discarding, drawing new cards, and assigning that number of cards to the player
 * @param  {String} deckUrl URL of the deck being used for this round
 * @param  {Array} discardCodes Card codes to discard
 * @param  {String} player Player whose hand is being worked
 * @param  {Function} sendDiscardData Callback function to 'Play' to signify the process is done
 */
export async function getNewCards(
  deckUrl,
  discardCodes,
  player,
  sendDiscardData,
  sendDiscardPending
) {
  const discardResponse = await fetch(
    deckUrl + "/pile/discard/add/?cards=" + discardCodes.toString()
  );
  await discardResponse.json();
  //  const redrawCount = 5 - discardData.piles[player].remaining;
  const redrawResponse = await fetch(
    deckUrl + "/draw/?count=" + discardCodes.length
  );
  const redrawData = await redrawResponse.json();
  console.log("redraw", player, discardCodes, redrawData.cards);
  let cards = [];
  if (redrawData.cards) {
    for (let i = 0; i < redrawData.cards.length; i++)
      cards.push(redrawData.cards[i].code);
  }
  const assResponse = await fetch(
    deckUrl + "/pile/" + player + "/add/?cards=" + cards.toString()
  );
  const done = await assResponse.json();
  if (done) {
    sendDiscardData(discardCodes.length);
    sendDiscardPending(false);
  }
}
