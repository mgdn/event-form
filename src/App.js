import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Reset } from "styled-reset";
import theme, { GlobalStyle } from "./theme";
import AddEventPage from "./features/events/components/AddEventPage";
import AddEventSuccessPage from "./features/events/components/AddEventSuccessPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Reset />
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" component={AddEventPage} exact={true} />
          <Route path="/success" component={AddEventSuccessPage} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
