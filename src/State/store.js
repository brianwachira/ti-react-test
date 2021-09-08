import { createStore, combineReducers, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';

//create store for separation of concerns
const store = createStore(usersReducer, applyMiddleware(thunk));

export default store;