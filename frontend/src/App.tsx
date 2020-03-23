import React from "react";
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from "apollo-boost";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home, UserProfil, Page404 } from "./pages";
import 'rsuite/dist/styles/rsuite-dark.css';
import './App.css';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  headers: {
    "Authorization": `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`
  }
});

export const App = () => {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path='/:username'>
            <UserProfil />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      </BrowserRouter>
    </ApolloProvider>
  );
};
