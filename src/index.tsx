import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ApolloProvider, ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { RootRouter } from "./Route"
import { RecoilRoot } from "recoil"
import { AuthStateListener } from "./providers/AuthStateListener"
import { GlobalAccout } from "./providers/GlobalAccount"

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
    <RecoilRoot>
      <ApolloProvider client={apolloClient}>
        <AuthStateListener>
          <GlobalAccout>
            <BrowserRouter>
              <RootRouter />
            </BrowserRouter>
          </GlobalAccout>
        </AuthStateListener>
      </ApolloProvider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
)
