import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk'
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
    reducer: dataReducer
})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))
export default store
