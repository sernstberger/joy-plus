import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FlowState {
  value: number;
  maxSteps: number;
}

const initialState: FlowState = {
  value: 1,
  maxSteps: 10, // Initially set to 10, but this can be changed dynamically later if needed
};

export const flowSlice = createSlice({
  name: 'flow',
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.maxSteps) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    setMaxSteps: (state, action: PayloadAction<number>) => {
      state.maxSteps = action.payload;
    },
    updateStep: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, setMaxSteps, updateStep } =
  flowSlice.actions;

export default flowSlice.reducer;
