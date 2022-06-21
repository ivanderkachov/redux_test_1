import { legacy_createStore as createStore, applyMiddleware, compose } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import createRootReducer from "./reducers"

const middleware = [thunk]
const initialState = {}

const composeFunction = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnhansers = composeFunction(applyMiddleware(...middleware))

const store = createStore(createRootReducer(), initialState, composeEnhansers);
export default store
