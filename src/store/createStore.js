import { createStore, applyMiddleware, compose } from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from '../reducers/index'


let debuggWrapper = data => data
if (__DEV__) {
  const { composeWithDevTools } = require('remote-redux-devtools')
  debuggWrapper = composeWithDevTools({ realtime: true, port: 8000 })
}

export default () => {
  const store = createStore(
    reducers,
    {},
    debuggWrapper(compose(applyMiddleware(ReduxThunk))),
  )
  return store
}
