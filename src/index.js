//packages
import React from "react";
import { createRoot } from "react-dom/client";

//components
import App from "./components/App";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <App />
  </div>
);
