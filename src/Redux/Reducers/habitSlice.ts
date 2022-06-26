import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from '../intialState';
import { IDay, IHabit, IHabitStatus, State } from '../types';


export const habitSlice = createSlice({
  name: 'habitData',
  initialState: initialState,
  reducers: {

    resetUser: (state) => {
      state.habit = initialState.habit;
    },

    updateHabit: (state, { payload }) => {
      state.habit.push(payload);
    },

    updateHabitStatus: (state, { payload }) => {
      state.habitStatus.push(payload)
    }

  },
})

// export const { updateHabit } = habitSlice.actions;


export default habitSlice.reducer