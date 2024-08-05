import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlices';
import errorReducer from '../features/slices/errorSlices';
import searchReducer from '../features/user/searchSlices';
import chefReducer from '../features/chef/chefSlice';

export const store = configureStore({
  reducer: {
    users: userReducer,
    error : errorReducer,
    search: searchReducer,
    chefs: chefReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

