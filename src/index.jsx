import React from "react";
import ReactDOMClient from "react-dom/client";
import { About } from "./screens/About";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<About />);
