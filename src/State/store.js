import { createStore, combineReducers, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import usersReducer from './usersReducer';

const reducers = {
    users : usersReducer
}
const store = createStore(usersReducer, applyMiddleware(thunk));

export default store;