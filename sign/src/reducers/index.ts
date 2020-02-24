import { combineReducers } from 'redux'

import counter from './counter'
import sign from './sign'

export default combineReducers({
  counter,
  sign
})
