import { configureStore, combineReducers } from "@reduxjs/toolkit";
import commerceReducer from "./commerceSlice";

export default configureStore({
  reducer: combineReducers({
    commerceSlice: commerceReducer,
  }),
});
