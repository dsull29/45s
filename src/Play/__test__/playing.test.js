import { getBestCardPlayed, getCardsInLeadSuit, playCard } from "../playing";

test("find worst card to play", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9C" },
    { code: "8S" },
    { code: "AD" },
  ];
  let playedCards = ["", "", "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(1, cards, bidData, "", playedCards);
  expect(card).toStrictEqual({ code: "AD" });
});

test("find best card to play", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9C" },
    { code: "8S" },
    { code: "AD" },
  ];
  let playedCards = ["", "", "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(3, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "5H" });
});

test("find card for player 2, that follows lead", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9D" },
    { code: "8S" },
    { code: "0D" },
  ];
  let playedCards = [{ code: "2D" }, "", "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(2, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "9D" });
});

test("find card for player 2, when he doesn't have the lead suit", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9C" },
    { code: "8H" },
    { code: "0C" },
  ];
  let playedCards = [{ code: "2D" }, "", "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(2, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "0C" });
});

test("find card for player 3, that follows lead", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9D" },
    { code: "8S" },
    { code: "0D" },
  ];
  let playedCards = [{ code: "2D" }, { code: "4D" }, "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(3, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "5H" });
});

test("find card for player 3, when he doesn't have the lead suit", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9C" },
    { code: "8H" },
    { code: "0C" },
  ];
  let playedCards = [{ code: "2D" }, { code: "4D" }, "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(3, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "5H" });
});

test("find card for player 3, when he doesn't have trump and has to follow lead", () => {
  let cards = [
    { code: "AS" },
    { code: "5S" },
    { code: "9D" },
    { code: "8S" },
    { code: "KD" },
  ];
  let playedCards = [{ code: "2D" }, { code: "4D" }, "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(3, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "KD" });
});

test("find card for player 3, when they don't have trump and or lead", () => {
  let cards = [
    { code: "AC" },
    { code: "5C" },
    { code: "9C" },
    { code: "8C" },
    { code: "KC" },
  ];
  let playedCards = [{ code: "2D" }, { code: "4D" }, "", ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(3, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "9C" });
});

test("find card for player 4, when they can't beat player 3", () => {
  let cards = [
    { code: "JH" },
    { code: "AH" },
    { code: "3D" },
    { code: "0D" },
    { code: "9S" },
  ];
  let playedCards = [{ code: "2D" }, { code: "4D" }, { code: "5H" }, ""];
  let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let card = playCard(4, cards, bidData, "D", playedCards);
  expect(card).toStrictEqual({ code: "3D" });
});

test("find cards in lead suit", () => {
  let cards = [
    { code: "AH" },
    { code: "5H" },
    { code: "9D" },
    { code: "8S" },
    { code: "AD" },
  ];
  // let bidData = { highBid: 20, highBidder: "You", trumpSuit: "Hearts" };
  let cardsInLeadSuit = getCardsInLeadSuit(cards, "D");
  expect(cardsInLeadSuit).toStrictEqual([{ code: "9D" }, { code: "AD" }]);
});

test("find best card value of 3", () => {
  let playedCards = [{ code: "2D" }, { code: "4D" }, { code: "5H" }, ""];
  let trump = "Hearts";
  let lead = "D";
  let highCard = getBestCardPlayed(
    playedCards.filter((n) => n),
    trump,
    lead
  );
  expect(highCard).toStrictEqual({ code: "5H" });
});

test("find best card value", () => {
  let playedCards = ["", "", "", ""];
  let trump = "Hearts";
  let lead = "D";
  let highCard = getBestCardPlayed(
    playedCards.filter((n) => n),
    trump,
    lead
  );
  expect(highCard).toStrictEqual(undefined);
});

test("find best card value when no trump", () => {
  let playedCards = [{ code: "0D" }, { code: "4D" }, "", ""];
  let trump = "Hearts";
  let lead = "D";
  let highCard = getBestCardPlayed(
    playedCards.filter((n) => n),
    trump,
    lead
  );
  expect(highCard).toStrictEqual({ code: "0D" });
});
