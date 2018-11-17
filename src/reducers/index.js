import {combineReducers} from 'redux'
import {loadingBarReducer} from 'react-redux-loading-bar'
import peopleReducer from './peopleReducer'

export default combineReducers({
  starWarPeople: peopleReducer,
  loadingBar: loadingBarReducer,
})
