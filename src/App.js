import React from 'react'
import { Provider } from 'react-redux'
import createMyStore from './store/createStore'
import Router from './Router'

const store = createMyStore()
const App = () => (
  <Provider store={store}>
    <Router />
  </Provider>
)

export default App
