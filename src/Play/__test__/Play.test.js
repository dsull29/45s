import React from "react";
import Play, { checkPlayerPosition } from "../Play";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("find player in first postion", ()=> {
    let num = checkPlayerPosition("player1",["player2","player3","player4","player1"])
    expect(num).toBe(4)
})

test("find player in 2nd postion", ()=> {
    let num = checkPlayerPosition("player1",["player4","player1","player2","player3"])
    expect(num).toBe(2)
})