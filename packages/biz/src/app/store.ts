import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Flow/flowSlice';

export default configureStore({
  reducer: {
    flow: counterReducer,
  },
});
