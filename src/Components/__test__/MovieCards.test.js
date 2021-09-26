import React from "react";
import ReactDOM from "react-dom";
import MoviesCards from "../MovieCards";


it("renders without crashing",()=>{
    const div = document.createElement("div")
    ReactDOM.render(<MoviesCards></MoviesCards>,div)
})