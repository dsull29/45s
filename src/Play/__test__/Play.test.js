import React from "react";
import Play, { checkPlayerPosition } from "../Play";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("find player in first postion", ()=> {
    let num = checkPlayerPosition("You",["Mario","Partner","Luigi","You"])
    expect(num).toBe(4)
})

test("find player in 2nd postion", ()=> {
    let num = checkPlayerPosition("You",["Luigi","You","Mario","Partner"])
    expect(num).toBe(2)
})