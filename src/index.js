import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Home from "./Home";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <App /> */}
    <Home/>
  </StrictMode>,
  rootElement
);
