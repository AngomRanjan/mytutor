import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  tes: [],
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
