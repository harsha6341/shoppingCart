import {combineReducers} from "redux";
import {productReducer} from "./productReducer"

export const ShoppingReducer = combineReducers({
    allProducts:productReducer
})

