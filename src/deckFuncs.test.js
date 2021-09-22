import "@testing-library/jest-dom/extend-expect";
import { getBookOrder, getRoundOrder } from "./deckFuncs";

test("check order round 1", () => {
  let order = getRoundOrder(1);
  expect(order).toStrictEqual(["player2", "player3", "player4", "player1"]);
});

test("check order round 22", () => {
  let order = getRoundOrder(22);
  expect(order).toStrictEqual(["player3", "player4", "player1", "player2"]);
});

test("find last winner from bidInfo", () => {
  let bookInfo = [{ book: 1, winningPlayer: "player3", highCard: "5H" }];
  let val = getBookOrder(bookInfo);
  expect(val).toStrictEqual(["player3", "player4", "player1", "player2"]);
});

test("find last winner from bidInfo when multiple books", () => {
  let bookInfo = [{ book: 1, winningPlayer: "player3", highCard: "5H" },
                  { book: 2, winningPlayer: "player2", highCard: "AH" }];
  let val = getBookOrder(bookInfo);
  expect(val).toStrictEqual([ 'player2', 'player3', 'player4', 'player1' ]);
});

test("find last winner from bidInfo when multiple books", () => {
  let bookInfo = [];
  let roundOrder = [ 'player2', 'player3', 'player4', 'player1' ]
  let val = getBookOrder(bookInfo,roundOrder);
  expect(val).toStrictEqual([ 'player2', 'player3', 'player4', 'player1' ]);
});
