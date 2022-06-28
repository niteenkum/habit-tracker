import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "../intialstate";
import { IHabit } from "../types";

export const updateHabitSlice = createSlice({
  name: "notification",
  initialState: initialState.habitData,
  reducers: {
    updateHabitData: (state, action: PayloadAction<IHabit>) => {
      state = [...state , action.payload];
    },

    updateDayStatus: (state, action: PayloadAction<{ index: number, status: "done" | "not-done" | "none", id: number }>) => {
      // state.habit[action?.payload?.id].day[action.payload.index].status = action.payload.status;
    }
  },
});

export const { updateHabitData } = updateHabitSlice.actions;
const habitReducer = updateHabitSlice.reducer;
export default habitReducer;