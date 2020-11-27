import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
    animals:"",
    users:""
});


const store = createStore(reducers)

export default store