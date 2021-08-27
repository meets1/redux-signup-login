// import rootReducer from "./redux/reducers/index";
// import { createStore } from "redux";

// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// export default store; 

import { createStore, applyMiddleware,compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/index'
const initialState = {}
const middleware = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(...middleware)),
)
export default store