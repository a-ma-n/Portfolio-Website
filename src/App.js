import React from "react";
import { ThemeProvider } from "styled-components";
import "./App.css";
import Main from "./containers/Main";
import { GlobalStyles } from "./global";
import { chosenTheme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          <Main theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
