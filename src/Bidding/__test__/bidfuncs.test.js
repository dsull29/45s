import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { checkBid, getBid } from "../bidfuncs";

test("bidder 1 passes", () => {
    let bidData = { highBid: null, highBidder: null };
    let bid = { bidder: "Mario", playerBid: "Pass", suit: "Hearts" };
    let {highBid,highBidder} = checkBid(bid, bidData);
    expect(highBid).toBe(undefined);
    expect(highBidder).toBe(undefined);
  });
  
  test("You takes passes Partner's 20", () => {
    let bidData = { highBid: "20", highBidder: null };
    let bid = { bidder: "You", playerBid: "Take", suit: "Clubs" };
    let { highBid, highBidder } = checkBid(bid, bidData);
    expect(highBid).toBe("20");
    expect(highBidder).toBe("You");
  });
  
  test("Mario bids 20", () => {
    let bidData = { highBid: "15", highBidder: "Luigi" };
    let bid = { bidder: "Mario", playerBid: "20", suit: "Spades" };
    let { highBid, highBidder } = checkBid(bid, bidData);
    expect(highBid).toBe("20");
    expect(highBidder).toBe("Mario");
  });

// getBid tests

  test("Mario calcs a 15 bid in hearts", () => {
      let handValues = [-45, -25, -8, 0];
      let bidData = { highBid: null, highBidder: null};
      let playerBid = getBid(handValues,bidData);
      expect(playerBid).toBe("15");
  });

  test("Mario calcs a 15 bid in hearts but player 3 already bid 15", () => {
    let handValues = [-38, -22, -10, -8];
    let bidData = { highBid: "15", highBidder: "Partner"};
    let playerBid = getBid(handValues,bidData);
    expect(playerBid).toBe("Pass");
});

test("Mario calcs a 20 and outbids a 15", () => {
    let handValues = [-9, -48, 35, -8];
    let bidData = { highBid: "15", highBidder: "Partner"};
    let playerBid = getBid(handValues,bidData);
    expect(playerBid).toBe("20");
});

test("Mario calcs a 30 and outbids a 15", () => {
  let handValues = [-9, -95, 35, -8];
  let bidData = { highBid: "15", highBidder: "Partner"};
  let playerBid = getBid(handValues,bidData);
  expect(playerBid).toBe("30");
});

test("Mario calcs a 20 and takes Partners 20", () => {
  let handValues = [-9, -47, 35, -8];
  let bidData = { highBid: "20", highBidder: "Partner"};
  let playerBid = getBid(handValues,bidData,true);
  expect(playerBid).toBe("Take");
});