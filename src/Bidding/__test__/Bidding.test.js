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
  const bidOrder = ["Mario", "Partner", "Luigi", "player5"];
  const { getByTestId } = render(<Bidding bidOrder={bidOrder} />);
  const firstBidderEl = getByTestId("firstBidder");
  expect(firstBidderEl.textContent).toBe("Mario to make first bid.");
});

let mockResponse = {
  success: true,
  deck_id: "y70syhgp11kv",
  remaining: 32,
  piles: {
    You: {
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
    Mario: {
      remaining: 5,
    },
    Partner: {
      remaining: 5,
    },
    Luigi: {
      remaining: 5,
    },
  },
};
