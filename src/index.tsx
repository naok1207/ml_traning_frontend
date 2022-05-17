import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client'
import App from './config/App'
import reportWebVitals from './config/reportWebVitals'

const link = createHttpLink({
  uri: `${process.env.REACT_APP_BACKEND_URL || ''}/graphql`,
  credentials: 'include',
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
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
