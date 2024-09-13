<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '../features/slices/errorSlices';


export const store = configureStore({
  reducer: {
    error : errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
=======
import { configureStore } from '@reduxjs/toolkit';
import errorReducer from '@/features/slices/errorSlices';


export const store = configureStore({
  reducer: {
    error : errorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
>>>>>>> 862becd20bdc1a1865e710e1615e0bacfa2b37db
export type AppDispatch = typeof store.dispatch;