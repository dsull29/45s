import "@testing-library/jest-dom/extend-expect";
import { getRoundOrder } from "./deckFuncs";

test("check order round 1", () => {
  let order = getRoundOrder(1);
  expect(order).toStrictEqual(["player2", "player3", "player4", "player1"]);
});

test("check order round 22", () => {
  let order = getRoundOrder(22);
  expect(order).toStrictEqual(["player3", "player4", "player1", "player2"]);
});
