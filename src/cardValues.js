const trumpValues = [
  -35, -21, -18, -13, -11, -10, -9, -8, -7, -6, -5, -4, -3, -2, -1,
];
const leadValues = [13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];
const offSuitValues = [27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14];

const heartTrumpOrder = [
  "5H",
  "JH",
  "AH",
  "KH",
  "QH",
  "0H",
  "9H",
  "8H",
  "7H",
  "6H",
  "4H",
  "3H",
  "2H",
];
const diamondTrumpOrder = [
  "5D",
  "JD",
  "AH",
  "AD",
  "KD",
  "QD",
  "0D",
  "9D",
  "8D",
  "7D",
  "6D",
  "4D",
  "3D",
  "2D",
];
const spadesTrumpOrder = [
  "5S",
  "JS",
  "AH",
  "AS",
  "KS",
  "QS",
  "2S",
  "3S",
  "4S",
  "6S",
  "7S",
  "8S",
  "9S",
  "0S",
];
const clubsTrumpOrder = [
  "5C",
  "JC",
  "AH",
  "AC",
  "KC",
  "QC",
  "2C",
  "3C",
  "4C",
  "6C",
  "7C",
  "8C",
  "9C",
  "0C",
];

const heartOffSuitOrder = [
  "2H",
  "3H",
  "4H",
  "5H",
  "6H",
  "7H",
  "8H",
  "9H",
  "0H",
  "JH",
  "QH",
  "KH",
];

const diamondOffSuitOrder = [
  "AD",
  "2D",
  "3D",
  "4D",
  "5D",
  "6D",
  "7D",
  "8D",
  "9D",
  "0D",
  "JD",
  "QD",
  "KD",
];

const spadesOffSuitOrder = [
  "0S",
  "9S",
  "8S",
  "7S",
  "6S",
  "5S",
  "4S",
  "3S",
  "2S",
  "AS",
  "JS",
  "QS",
  "KS",
];

const clubsOffSuitOrder = [
  "0C",
  "9C",
  "8C",
  "7C",
  "6C",
  "5C",
  "4C",
  "3C",
  "2C",
  "AC",
  "JC",
  "QC",
  "KC",
];

/** Evalutes the given hand of cards in each suit
 * @param  {Array} cards
 * @returns {Array} calculated hand values [Hearts,Diamonds,Spade,Club]
 */
export function evaluateHand(cards) {
  let card;
  let heartHandVal, diamondHandVal, spadeHandVal, clubHandVal;
  heartHandVal = diamondHandVal = spadeHandVal = clubHandVal = 0;

  for (card of cards) {
    switch (card.charAt(1)) {
      case "H":
        heartHandVal += getTrumpValue(card, "H");
        break;
      case "D":
        diamondHandVal += getTrumpValue(card, "D");
        break;
      case "S":
        spadeHandVal += getTrumpValue(card, "S");
        break;
      case "C":
        clubHandVal += getTrumpValue(card, "C");
        break;
      default:
        console.log("default returned");
    }
  }
  return [heartHandVal, diamondHandVal, spadeHandVal, clubHandVal];
}
/** Gets the card value relative to trump and lead suits
 * @param  {String} card 2 char card identifier (ie AH = Ace of Hearts)
 * @param  {String} trump trump suit
 * @param  {String} lead lead suit
 */
export function getCardValue(card, trump, lead) {
  let cardSuit = card.charAt(1);
  let trumpSuit = trump.charAt(0);
  let leadSuit = lead;
  let cardValue = "";
  if (cardSuit === trumpSuit || card === "AH") {
    cardValue = getTrumpValue(card, trumpSuit);
  } else if (cardSuit === leadSuit) {
    cardValue = getLeadValue(card, lead);
  } else {
    cardValue = getOffSuitValue(card, cardSuit);
  }
  return cardValue;
}

/** Gets the value of the card when it's the trump suit
 * @param  {String} card 2 char card identifer ie AH = Ace of Hearts)
 * @param  {String} trump the trump suit
 */
function getTrumpValue(card, trump) {
  switch (trump) {
    case "H":
      return trumpValues[heartTrumpOrder.indexOf(card)];
    case "D":
      return trumpValues[diamondTrumpOrder.indexOf(card)];
    case "S":
      return trumpValues[spadesTrumpOrder.indexOf(card)];
    case "C":
      return trumpValues[clubsTrumpOrder.indexOf(card)];
    default:
      return "";
  }
}

/** Gets the value of the card when it's the lead suit
 * @param  {String} card 2 char card identifer ie AH = Ace of Hearts)
 * @param  {String} lead the lead suit
 */
function getLeadValue(card, lead) {
  switch (lead) {
    case "H":
      return leadValues[heartOffSuitOrder.indexOf(card)];
    case "D":
      return leadValues[diamondOffSuitOrder.indexOf(card)];
    case "S":
      return leadValues[spadesOffSuitOrder.indexOf(card)];
    case "C":
      return leadValues[clubsOffSuitOrder.indexOf(card)];
    default:
      return "";
  }
}

/** Gets the value of the card when it's neither trump or lead suit
 * @param  {String} card 2 char card identifier ie (AH = Ace of Hearts)
 * @param  {String} cardSuit the card's suit
 */
function getOffSuitValue(card, cardSuit) {
  switch (cardSuit) {
    case "H":
      return offSuitValues[heartOffSuitOrder.indexOf(card)];
    case "D":
      return offSuitValues[diamondOffSuitOrder.indexOf(card)];
    case "S":
      return offSuitValues[spadesOffSuitOrder.indexOf(card)];
    case "C":
      return offSuitValues[clubsOffSuitOrder.indexOf(card)];
    default:
      return "";
  }
}
