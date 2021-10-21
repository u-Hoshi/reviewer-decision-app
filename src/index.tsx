import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

import { RootRouter } from "./Route"

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_END_POINT_ORIGIN,
})

const authLink = setContext(async () => {
  return {
    headers: {
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY,
    },
  }
})

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <RootRouter />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
