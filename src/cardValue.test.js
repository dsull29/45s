import "@testing-library/jest-dom/extend-expect";
import { evaluateHand, getCardValue } from "./cardValues";

test("get value of 5 in trump", () => {
    let cardValue = getCardValue("5H","Hearts","D");
    expect(cardValue).toBe(-35);
  });

  test("get value of AD when trump", () => {
    let cardValue = getCardValue("AD","Diamonds","D");
    expect(cardValue).toBe(-13);
  }); 

  test("get value of AD off suit trump when diamond leads", () => {
    let cardValue = getCardValue("AD","Clubs","D");
    expect(cardValue).toBe(13);
  });  

  test("get value of AD off suit trump", () => {
    let cardValue = getCardValue("AD","Clubs","H");
    expect(cardValue).toBe(27);
  });  

  test("get best hand strength", ()=> {
    let cards = ["5H","JH","AH","KH","QH"];
    let handValue = evaluateHand(cards);
    expect(handValue[0]).toBe(-98)
});

test("get best hand strength", ()=> {
    let cards = ["5C","JS","5H","AD","KD"];
    let handValue = evaluateHand(cards);
    expect(handValue).toStrictEqual([-35,-24,-21,-35])
});

