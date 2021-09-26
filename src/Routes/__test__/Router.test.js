import React from "react";
import ReactDOM from "react-dom";
import Routes from "../Router";

it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<Routes></Routes>,div)
})