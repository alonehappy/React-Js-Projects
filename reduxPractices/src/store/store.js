import {createStore, combineReducers} from "redux"
import countReducer from "./reducers/countReducer";
import authReducer from "./reducers/authReducer";

const reducers = combineReducers({
    count:countReducer,
    authIs:authReducer
})

const store = createStore(reducers,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default store 