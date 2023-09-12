import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './flowSlice';

export default configureStore({
  reducer: {
    flow: counterReducer,
  },
});
