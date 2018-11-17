import {applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middleware = [thunk, logger]

export default composeEnhancers(applyMiddleware(...middleware))
