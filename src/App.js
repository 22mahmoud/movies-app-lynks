import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";
import { Box } from "rebass";

import { ROUTES, THEME } from "./config/contants";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import Header from "./components/Header";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  html, body {
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    padding: 0;
    margin: 0;
    height: 100vh;
    color: rgb(46, 68, 78);
    -webkit-font-smoothing: subpixel-antialiased;
  }
`;

export default function App() {
  return (
    <ThemeProvider theme={THEME}>
      <>
        <Helmet>
          <title>Movies Lynks</title>
        </Helmet>
        <GlobalStyle />
        <Router>
          <>
            <Header />
            <Switch>
              <Box px={[2, 3, 6]} py={2}>
                <Route exact path={ROUTES.HOME} component={HomePage} />
                <Route path={ROUTES.SIGN_UP} component={SignupPage} />
                <Route path={ROUTES.LOG_IN} component={LoginPage} />
              </Box>
            </Switch>
          </>
        </Router>
      </>
    </ThemeProvider>
  );
}