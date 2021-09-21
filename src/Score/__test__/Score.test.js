import React from "react";
import Score from "../Score";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("test the default values on load", () => {
  let mockScore = [0, 0];
  const { getByTestId } = render(<Score round={1} gameScore={mockScore}/>);
  const team1ScoreEl = getByTestId("team1Score");
  const team2ScoreEl = getByTestId("team2Score");
  const roundEl = getByTestId("round");

  expect(team1ScoreEl.textContent).toBe("Team 1: 0");
  expect(team2ScoreEl.textContent).toBe("Team 2: 0");
  expect(roundEl.textContent).toBe("Round: 1");
});

test("test in game values", () => {
    let mockScore = [15, 4];
    const { getByTestId } = render(<Score round={5} gameScore={mockScore}/>);
    const team1ScoreEl = getByTestId("team1Score");
    const team2ScoreEl = getByTestId("team2Score");
    const roundEl = getByTestId("round");
  
    expect(team1ScoreEl.textContent).toBe("Team 1: 15");
    expect(team2ScoreEl.textContent).toBe("Team 2: 4");
    expect(roundEl.textContent).toBe("Round: 5");
  });
  

