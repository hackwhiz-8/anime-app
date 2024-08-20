import { combineReducers } from "redux";
import { reducer } from "./Reducer";
import { Popular_reducer } from "./PopularReducer";

export default combineReducers({
    Popular_reducer,
})