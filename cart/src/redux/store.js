import { useEffect } from "react";
import {createStore} from "redux";
import { setProducts } from "./actions/productActions";
import { ShoppingReducer } from "./reducers/index";

const store = createStore(
    ShoppingReducer,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;


useEffect(()=>{
    const fetchProducts = async () =>{


        try{
        const resposne = await axios.get("/")
        setProducts(resposne.data)
        }
    }catch(err)
    {
        
    }
        fetchProducts();

},[])
