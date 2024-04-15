import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { SupabaseContextProvider } from "./context/SupabaseContext";

import "./index.css";
import Routes from "./Routes";

import { ThemeProvider } from "styled-components";
import theme from "./util/theme";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <SupabaseContextProvider>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </SupabaseContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
