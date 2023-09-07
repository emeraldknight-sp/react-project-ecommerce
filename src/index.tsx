import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./App";
import { Metric } from "web-vitals";
import { Toaster } from "react-hot-toast";
import { reportWebVitals } from "./reportWebVitals";

import { GlobalStyle } from "./style/global";

const rootElement = document.getElementById("root");
const handleWebVitals = (metric: Metric) => {
  console.log(metric);
};

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Toaster position="bottom-right" reverseOrder={false} />
      <GlobalStyle />
      <App />
    </React.StrictMode>,
  );
} else {
  console.error("Element 'root' not found in the DOM.");
}

reportWebVitals(handleWebVitals);
