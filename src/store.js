import { createStore } from "redux";
import RootReducer from "./Reducers/RootReducers";
 
const store = createStore(RootReducer);
export default store;