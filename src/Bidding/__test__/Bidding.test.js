import React from "react";
import useFetch from "../../useFetch";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Bidding from "../Bidding";

test.skip("return null when bidder passes", () => {
  useFetch.mockResolvedValue({
    data: mockResponse,
    isPending: false,
    error: null,
  });
  const bidOrder = ["player2", "player3", "player4", "player5"];
  const { getByTestId } = render(<Bidding bidOrder={bidOrder} />);
  const firstBidderEl = getByTestId("firstBidder");
  expect(firstBidderEl.textContent).toBe("player2 to make first bid.");
});

let mockResponse = {
  success: true,
  deck_id: "y70syhgp11kv",
  remaining: 32,
  piles: {
    player1: {
      remaining: 5,
      cards: [
        {
          code: "QC",
        },
        {
          code: "AC",
        },
        {
          code: "7H",
        },
        {
          code: "AS",
        },
        {
          code: "3H",
        },
      ],
    },
    player2: {
      remaining: 5,
    },
    player3: {
      remaining: 5,
    },
    player4: {
      remaining: 5,
    },
  },
};
