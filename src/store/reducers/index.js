import {combineReducers} from "redux";
import menuReducer from "./menuReducer";
import contactBlockReducer from "./contactBlockReducer";

const combine = combineReducers({
    menuReducer, contactBlockReducer
})

export default combine;