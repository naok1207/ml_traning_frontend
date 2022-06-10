import ReactDOM from 'react-dom/client'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import App from './App'
import reportWebVitals from './App/reportWebVitals'
import { getStoredAuthToken } from './shared/utils/authToken'

const httpLink = createHttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL || ''}/graphql`,
  credentials: 'include',
})

const authLink = setContext((_, { headers }) => {
  const token = getStoredAuthToken()
  return {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    headers: {
      ...headers,
      authorization: token || ''
    }
  }
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
})

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
