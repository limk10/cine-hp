import "@testing-library/jest-dom";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "~/store";
import App from "~/App";

// test utils file
const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return render(ui, { wrapper: BrowserRouter });
};

test("signin app rendering/navigating", async () => {
  const { getByText, getByTestId } = renderWithRouter(<App />);
  expect(getByText(/ENTRAR/i)).toBeInTheDocument();

  const btnSubmit = await waitFor(() => getByTestId("submitSignIn"));

  fireEvent.click(btnSubmit);
});

test("home page", async () => {
  const { getByText } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/" }
  );

  expect(getByText(/Um breve resumo do que foi usado/i)).toBeInTheDocument();
});

test("list of recipes", async () => {
  const { getByText, getAllByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/recipes" }
  );

  expect(getByText(/Receitas/i)).toBeInTheDocument();

  const btnSubmit = await waitFor(() => getAllByTestId("menuButton"));
  expect(btnSubmit[0]).toBeDefined();
  fireEvent.click(btnSubmit[0]);

  const cardList = await waitFor(() => getAllByTestId("listCardRecipes"));
  expect(cardList[0]).toBeDefined();

  fireEvent.click(btnSubmit[0]);
});

test("detailt of recipes", async () => {
  const { getByTestId } = renderWithRouter(
    <Provider store={store()}>
      <App />
    </Provider>,
    { route: "/recipes/details" }
  );

  const boxDetails = await waitFor(() => getByTestId("boxRecipeDetails"));
  expect(boxDetails).toBeDefined();
});
