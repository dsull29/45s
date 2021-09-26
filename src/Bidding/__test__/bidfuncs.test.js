import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { checkBid, getBid } from "../bidfuncs";

test("bidder 1 passes", () => {
    let bidData = { highBid: null, highBidder: null };
    let bid = { bidder: "player2", playerBid: "Pass", suit: "Hearts" };
    let highBid = checkBid(bid, bidData);
    expect(highBid).toBe(null);
  });
  
  test("player1 takes passes player3's 20", () => {
    let bidData = { highBid: "20", highBidder: null };
    let bid = { bidder: "player1", playerBid: "Take", suit: "Clubs" };
    let { highBid, highBidder } = checkBid(bid, bidData);
    expect(highBid).toBe("20");
    expect(highBidder).toBe("player1");
  });
  
  test("player2 bids 20", () => {
    let bidData = { highBid: "15", highBidder: "player4" };
    let bid = { bidder: "player2", playerBid: "20", suit: "Spades" };
    let { highBid, highBidder } = checkBid(bid, bidData);
    expect(highBid).toBe("20");
    expect(highBidder).toBe("player2");
  });

// getBid tests

  test("player2 calcs a 15 bid in hearts", () => {
      let handValues = [-9, 22, 35, -8];
      let bidData = { highBid: null, highBidder: null};
      let playerBid = getBid(handValues,bidData);
      expect(playerBid).toBe("15");
  });

  test("player2 calcs a 15 bid in hearts but player 3 already bid 15", () => {
    let handValues = [-9, 22, 35, -8];
    let bidData = { highBid: "15", highBidder: "player3"};
    let playerBid = getBid(handValues,bidData);
    expect(playerBid).toBe("Pass");
});

test("player2 calcs a 20 and outbids a 15", () => {
    let handValues = [-9, -27, 35, -8];
    let bidData = { highBid: "15", highBidder: "player3"};
    let playerBid = getBid(handValues,bidData);
    expect(playerBid).toBe("20");
});