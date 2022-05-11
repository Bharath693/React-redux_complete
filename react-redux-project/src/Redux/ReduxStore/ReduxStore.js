import React from 'react'
import thunk from "redux-thunk";
import { combineReducers, applyMiddleware, createStore }from "redux";
import LoginReducer from '../_reducers/LoginReducer';

const rootReducer = combineReducers({
    LoginR:LoginReducer
})

const middleware = [thunk];

 const store = createStore(rootReducer, applyMiddleware(...middleware));

 export default store;