import { combineReducers } from 'redux'
import mainReducer from './main'

if (__DEV__) {
  require('react-devtools')
}

const rootReducer = combineReducers({
  main: mainReducer,
})

export default rootReducer
