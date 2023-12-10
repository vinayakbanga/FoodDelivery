import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "./Reducers/menuReducer";
import {userReducer} from "./Reducers/userReducer"
import dummyReducer from "./Reducers/dummyReducer";


// Combine the reducers
const reducer = combineReducers({
  items: menuReducer,
  user:userReducer,
  dummy:dummyReducer
  // Add more reducers if needed
});

// let initialState = {};

// const middleware = [thunk];

const store = configureStore(
  {

    reducer
  }
  
  // middleware: middleware,
  // preloadedState: initialState,
);

export default store;
