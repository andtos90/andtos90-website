import React from "react";
import { Router, Link } from "react-static";
import styled, { injectGlobal } from "react-emotion";
import { hot } from "react-hot-loader";
import Routes from "react-static-routes";

import colors from "./config/colors";

injectGlobal`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    background-color: ${colors.BACKGROUND};
    color: ${colors.TEXT};
    min-width: 300px;
  }

  a {
    color: ${colors.SECONDARY};
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-color: ${colors.TEXT};
    font-weight: bold;
  }

  h1, h2, h3 {
    color: ${colors.SECONDARY};
  }
`;

const AppStyles = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  nav {
    display: flex;
    flex-direction: row;
    background: ${colors.BACKGROUND};
    a {
      padding: 1rem;
      display: inline-block;
    }
  }

  img {
    max-width: 100%;
  }
`;

const App = () => (
  <Router>
    <AppStyles>
      {/*<nav>
        <Link exact to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/resume">Resumè</Link>
      </nav>*/}

      <Routes />
    </AppStyles>
  </Router>
);

export default hot(module)(App);
