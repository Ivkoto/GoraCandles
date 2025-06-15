import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#4caf50" },
    secondary: { main: "#c06a4c" },
    text: {
      primary: "#2c2c2c",
      secondary: "#666666",
    },
  },
  typography: {
    fontFamily: [
      '"Phenomena"',
      '"Philosopher"',
      '"Roboto"',
      '"Helvetica"',
      '"Arial"',
      "sans-serif",
    ].join(","),
    fontSize: 18, // Base font size - increased from 16
    h6: {
      fontFamily: '"Phenomena", "Philosopher", "Roboto", sans-serif',
      fontWeight: 600,
      letterSpacing: "0.5px",
      fontSize: "1.6rem", // Product titles - increased from 1.3rem
    },
    body1: {
      fontFamily: '"Phenomena", "Philosopher", "Roboto", sans-serif',
      fontSize: "1.3rem", // General body text - increased from 1.1rem
    },
    body2: {
      fontFamily: '"Phenomena", "Philosopher", "Roboto", sans-serif',
      fontSize: "1.2rem", // Smaller body text - increased from 1rem
    },
    subtitle1: {
      fontFamily: '"Phenomena", "Philosopher", "Roboto", sans-serif',
      fontSize: "1.5rem", // Used for prices - increased from 1.2rem
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          color: "#2c2c2c",
        },
      },
    },
  },
});

export default theme;
