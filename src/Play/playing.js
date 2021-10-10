import { getCardValue } from "../cardValues";

export function playCard(position, cards, bidData, leadSuit, playedCards, bookOrder,player) {
  const trumpSuit = bidData.trumpSuit;
  let card;
  let availCards;
  let cardsInLeadSuit = getCardsInLeadSuit(cards, leadSuit);
  let cardsInTrumpSuit = getCardsInTrumpSuit(cards, trumpSuit);
  
  let bestCardPlayed;
  if (playedCards[0]) {
    bestCardPlayed = getBestCardPlayed(playedCards.filter(n => n), trumpSuit, leadSuit);
  }
  
  switch (position) {
    case 1:
      // TODO
      // if 30No was bid by you team consider throwing best card
      // if partner bid 20 or higher then lead out in Trump
      // else
      // play your worst card, trying to avoid trump
      card = getWorstCard(cards, trumpSuit);
      // if trump can't be avoided consider going high
      break;
    case 2:
      // 2nd player usually just wants to throw away a bad card as they are
      // unlikely to be a factor in the final outcome of the book
      //
      // there is an option to cut with the 2nd card.
      //  would  come into play in later books when the partner hasn't shown
      //  any strength in trump
      //  or
      //  maybe you're behind the bidder's lead and want to play a
      //  strong trump card before it's lost
      availCards = getAvailCards(cardsInLeadSuit, availCards, cards);
      card = getWorstCard(availCards, trumpSuit, leadSuit);
      break;
    case 3:
      // In third position you always want to be playing your strongest card,
      // be that trump or in the lead suit
      //   availCards = getAvailCards(cardsInLeadSuit, availCards, cards)
      availCards = cardsInLeadSuit.concat(cardsInTrumpSuit);
      // trumpCards = getTrumpCards(cardsInTrumpSuit, trumpCards, cards);
      card = getBestCard(availCards, trumpSuit, leadSuit);
      // if you can't play strong enough card throw away a bad card
      if (!card) {
        card = getWorstCard(cards, trumpSuit, leadSuit);
      }
      break;
    case 4:
      card = getBestCard(cards, trumpSuit, leadSuit);
      if (isCardHigher(card, bestCardPlayed, trumpSuit,leadSuit) === false) {
        availCards = getAvailCards(cardsInLeadSuit, availCards, cards);
        card = getWorstCard(availCards, trumpSuit, leadSuit);}
      break;
    default:
      console.log("defaultHit");
  }
  return card;
}

function getAvailCards(cardsInLeadSuit, availCards, cards) {
  if (cardsInLeadSuit.length > 0) {
    availCards = cardsInLeadSuit;
  } else {
    availCards = cards;
  }
  return availCards;
}

export function getWorstCard(cards, trump, lead) {
  let worstCard = null;
  let worstCardVal = 0 - 50;

  for (let i = 0; i < cards.length; i++) {
    let curCardVal = getCardValue(cards[i].code, trump, lead);
    if (curCardVal > worstCardVal) {
      worstCardVal = curCardVal;
      worstCard = i;
    }
  }
  return cards[worstCard];
}

export function getBestCard(cards, trump, lead) {
  let bestCard = null;
  let bestCardVal = 50;

  for (let i = 0; i < cards.length; i++) {
    let curCardVal = getCardValue(cards[i].code, trump, lead);
    if (curCardVal < bestCardVal) {
      bestCardVal = curCardVal;
      bestCard = i;
    }
  }

  return cards[bestCard];
}

export function getCardsInLeadSuit(cards, leadSuit) {
  let card;
  let cardsInLeadSuit = [];
  for (card of cards) {
    if (card.code.charAt(1) === leadSuit) {
      cardsInLeadSuit.push(card);
    }
  }
  return cardsInLeadSuit;
}

export function getCardsInTrumpSuit(cards, trumpSuit) {
  let card;
  let cardsInTrumpSuit = [];
  for (card of cards) {
    if (card.code.charAt(1) === trumpSuit.charAt(0)) {
      cardsInTrumpSuit.push(card);
    }
  }
  return cardsInTrumpSuit;
}

export function getBestCardPlayed(cards, trump, leadSuit) {
  let card;
  let highCardValue = 50;
  let highCard;
  for (card of cards) {
    
    let cardValue = getCardValue(card.code, trump, leadSuit);
    if (highCardValue > cardValue) {
      highCardValue = cardValue;
      highCard = card;
    }
  }
  return highCard;
}

function isCardHigher(card, bestCardPlayed, trumpSuit, leadSuit) {
  const cardValue = getCardValue(card.code, trumpSuit, leadSuit);
  const bestCardPlayedValue = getCardValue(
    bestCardPlayed.code,
    trumpSuit,
    leadSuit
  );
 
  return cardValue < bestCardPlayedValue;
}
