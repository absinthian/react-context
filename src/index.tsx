import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { MovieProvider } from "./MovieContext";

ReactDOM.render(
    <MovieProvider>
        <App />
    </MovieProvider>
    , document.getElementById("root"));
