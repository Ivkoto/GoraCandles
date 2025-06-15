import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import theme from "./theme";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { CartProvider } from "./context/CartContext";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find #root");

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <CartProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </CartProvider>
  </React.StrictMode>,
);
