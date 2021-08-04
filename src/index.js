import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { QuestionProvider } from "./contexts/QuestionContext";

ReactDOM.render(
  // <React.StrictMode>
    <QuestionProvider>
      <App />
    </QuestionProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);
