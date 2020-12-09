import React from "react";
import { ToastContainer } from "react-toastify";
import { BrowserRouter } from "react-router-dom";
import { Box, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/client";

import client from "~/services/api";

import GlobalStyle from "~/assets/css/global.js";
import Header from "~/components/Header";
import Routes from "~/routes";

const theme = createMuiTheme({});

const App = () => {
  return (
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <Header />
          <Box>
            <GlobalStyle />
            <ToastContainer />
            <Routes />
          </Box>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
