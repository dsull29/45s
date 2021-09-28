import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { bidding, getBid } from "./scripts";

test.skip("check if spades is returned when it's the best hand", () => {
  let { playerBid, suit } = getBid([22, 35, -20, -19]);
  expect(playerBid).toBe("15");
  expect(suit).toBe("Spades");
});

test.skip("player 3 bids 20 in clubs", () => {
  const cards = [
    ["2H", "3H", "0S", "9S", "AD"],
    ["5C", "JC", "AH", "0C", "KD"],
    ["9C", "8S", "4D", "QH", "7H"],
    ["6H", "2D", "3D", "6H", "Q3"],
  ];
  const bidders = ["Mario", "Partner", "Luigi", "You"];
  const { highBid, highBidder, bidderSuit } = bidding(cards, bidders);
  expect(highBid).toBe("20");
  expect(highBidder).toBe("Partner");
  expect(bidderSuit).toBe("Clubs");
});
