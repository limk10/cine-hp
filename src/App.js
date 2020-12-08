import React from "react";
import { Container, Box, createMuiTheme } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import { ApolloProvider } from "@apollo/client";

import client from "~/services/api";

import { BrowserRouter } from "react-router-dom";

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
          <Container maxWidth="lg">
            <Box mt={4}>
              <GlobalStyle />
              <Routes />
            </Box>
          </Container>
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
};

export default App;
