import { combineReducers } from "redux";
import AppReducers from "./App/AppReducer";

const rootReducer = combineReducers({
    app: AppReducers,
})

export default rootReducer;