import "@testing-library/jest-dom/extend-expect";
import { getBookOrder, getRoundOrder } from "./deckFuncs";

test("check order round 1", () => {
  let order = getRoundOrder(1);
  expect(order).toStrictEqual(["Mario", "Partner", "Luigi", "You"]);
});

test("check order round 22", () => {
  let order = getRoundOrder(22);
  expect(order).toStrictEqual(["Partner", "Luigi", "You", "Mario"]);
});

test("find last winner from bidInfo", () => {
  let bookInfo = [{ book: 1, winningPlayer: "Partner", highCard: "5H" }];
  let val = getBookOrder(bookInfo);
  expect(val).toStrictEqual(["Partner", "Luigi", "You", "Mario"]);
});

test("find last winner from bidInfo when multiple books", () => {
  let bookInfo = [{ book: 1, winningPlayer: "Partner", highCard: "5H" },
                  { book: 2, winningPlayer: "Mario", highCard: "AH" }];
  let val = getBookOrder(bookInfo);
  expect(val).toStrictEqual([ 'Mario', 'Partner', 'Luigi', 'You' ]);
});

test("find last winner from bidInfo when multiple books", () => {
  let bookInfo = [];
  let roundOrder = [ 'Mario', 'Partner', 'Luigi', 'You' ]
  let val = getBookOrder(bookInfo,roundOrder);
  expect(val).toStrictEqual([ 'Mario', 'Partner', 'Luigi', 'You' ]);
});
