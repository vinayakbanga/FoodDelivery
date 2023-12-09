import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { menuReducer } from "./Reducers/menuReducer";
// import thunk from "redux-thunk"
// Define a dummy reducer
// const dummyReducer = (state = {}, action) => {
//   // You can add your reducer logic here
//   return state;
// };

// Combine the reducers
const reducer = combineReducers({
  items: menuReducer,
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
