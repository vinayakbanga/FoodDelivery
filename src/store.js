import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "./Reducers/menuReducer";
import {profileReducer, userReducer} from "./Reducers/userReducer"
import dummyReducer from "./Reducers/dummyReducer";
import { cartReducer } from "./Reducers/cartReducer";
import { newOrderReducer } from "./Reducers/orderReducer";


// Combine the reducers
const reducer = combineReducers({
  items: menuReducer,
  user:userReducer,
  profile:profileReducer,
  dummy:dummyReducer,
  cart:cartReducer,
  newOrder:newOrderReducer
  // Add more reducers if needed
});

let initialState = {
  cart:{
    cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):
    [],
    shippinginfo:localStorage.getItem("shippinginfo")?JSON.parse(localStorage.getItem("shippinginfo")):
    {},
  }
  //10:43
};

// const middleware = [thunk];

const store = configureStore(
  {

    reducer,
    initialState
  }
  
  // middleware: middleware,
  // preloadedState: initialState,
);

export default store;
