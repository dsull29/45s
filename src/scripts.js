import { getCardValue, evaluateHand } from "./cardValues";

export function getDealer(dealers) {
  let order = dealers;
  let dealer = order.shift();
  // TODO fix the order here
  order.push(dealer);
  return { dealer, order };
}

export function bidding(cards, bidders) {
  let bestBid, highBidder;
  var highBid = 0;
  for (let i = 0; i < 3; i++) {
    bestBid = getBid(evaluateHand(cards[i]));
    if (bestBid > highBid) {
      highBid = bestBid;
      highBidder = bidders[i];
    }
  }
  return { highBid, highBidder };
}

function getBid(handValues) {
  var bestHandVal = handValues.sort(function (a, b) {
    return a - b;
  })[0];
  var playerBid = null;
  if (bestHandVal < 0 - 25) {
    playerBid = "20";
  } else if (bestHandVal < 0 - 5) {
    playerBid = "15";
  }
  return playerBid;
}

export function getWorstCard(cards, trump) {
  var worstCard = null;
  var worstCardVal = 0 - 50;

  for (let i = 0; i < cards.length; i++) {
    var curCardVal = getCardValue(cards[i].code, trump);
    if (curCardVal > worstCardVal) {
      worstCardVal = curCardVal;
      worstCard = i;
    }
  }
  return cards[worstCard];
}

export function getBestCard(cards, trump) {
  var bestCard = null;
  var bestCardVal = 50;

  for (let i = 0; i < cards.length; i++) {
    var curCardVal = getCardValue(cards[i].code, trump);
    if (curCardVal < bestCardVal) {
      bestCardVal = curCardVal;
      bestCard = i;
    }
  }

  return cards[bestCard];
}

export function getPlayerHand(url, player) {
  var tempData;

  const playerHand = fetch(url)
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
    });
  playerHand.then((data) => {
    return data;
    // let cards = data.piles[player].cards
    // let codes = []
    // let tempData = null
    // for (let i = 0; i < cards.length; i++) {
    //     codes.push(cards[i].code)
    // }
    // tempData = {
    //     player: player,
    //     cards,
    //     codes
    // }
    // return tempData
  });

  return tempData;
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
  sendDiscardData
) {
  const discardData = await discard(deckUrl, discardCodes);

  const redrawCount = 5 - discardData.piles[player].remaining;
  const redrawData = await redraw(deckUrl, redrawCount);

  let cards = [];
  if (redrawData.cards) {
    for (let i = 0; i < redrawData.cards.length; i++)
      cards.push(redrawData.cards[i].code);
  }

  await assign(deckUrl, player, cards);

  sendDiscardData(true);
}

async function discard(deckUrl, discardCodes) {
  const response = await fetch(
    deckUrl + "/pile/discard/add/?cards=" + discardCodes.toString()
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return response;
}

/**
 * Draw a number of cards from the deck
 * @param  {String} deckUrl URL to the deck where cards will be drawn form
 * @param  {Int} count
 * @return response data
 */
async function redraw(deckUrl, count) {
  const response = await fetch(deckUrl + "/draw/?count=" + count)
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return response;
}

/** Assign cards to the players pile
 * @param  {String} deckUrl URL to the deck where the cards will be assigned
 * @param  {String} player Player pile to assign the cards to
 * @param  {Array} cards List of cards to assign to the pile
 * @return fetch response data
 */
async function assign(deckUrl, player, cards) {
  const response = await fetch(
    deckUrl + "/pile/" + player + "/add/?cards=" + cards.toString()
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return data;
    });
  return response;
}
/** Moves the player's selected card to the discard pile and plays the card on the table
 * @param  {String} deckUrl URL to the deck being used
 * @param  {String} playerCard Card code of the card being played
 * @param  {Function} sendPlayerCard Calls back to play with the PlayerCard
 */
export async function playCardNow(deckUrl, playerCard, sendPlayerCard) {
  const response = await fetch(
    deckUrl + "/pile/discard/add/?cards=" + playerCard.code
  )
    .then((res) => {
      if (!res.ok) {
        throw Error("Could not fetch data for that resource");
      }
      return res.json();
    })
    .then((data) => {
      return playerCard;
    });
  sendPlayerCard(playerCard);
}
