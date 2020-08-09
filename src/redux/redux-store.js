import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import authReducer from "./auth-reducer";
import userReducer from "./user-reducer";
import chatReducer from "./chat-reducer";
import usersListReducer from "./usersList-reducer";


let reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    chat: chatReducer,
    usersList: usersListReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;