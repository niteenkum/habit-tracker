import { createSlice } from '@reduxjs/toolkit';


export const updateHabitSlice = createSlice({
  name: 'updateHabit',
  initialState: [
    {
      title:"Exercise",
    description:"Daily Exercise for 30 minutes",
    id:1,
    day:[
    {day:"Saturday",
    status:"done"},
    {day: "Sunday",
    status:"done"},
    {day: "Monday",
    status:"done"},
    {day: "Tuesday",
    status:"none"},
    {day: "Wednesday",
    status:"not-done"},
    {day: "Thrusday",
    status:"not-done"},
    ]
    },
    {
      title:"Swim",
    description:"Daily Swim for 30 minutes",
    id:2,
    day:[
    {day:"Saturday",
    status:"none"},
    {day: "Sunday",
    status:"done"},
    {day: "Monday",
    status:"none"},
    {day: "Tuesday",
    status:"done"},
    {day: "Wednesday",
    status:"done"},
    {day: "Thrusday",
    status:"not-done"},
    ]
    },
    {
      title:"Wakeup Early",
    description:"Wakeup at 6 AM Perday",
    id:3,
    day:[
    {day:"Saturday",
    status:"not-done"},
    {day: "Sunday",
    status:"none"},
    {day: "Monday",
    status:"none"},
    {day: "Tuesday",
    status:"none"},
    {day: "Wednesday",
    status:"not-done"},
    {day: "Thrusday",
    status:"none"},
    ]
    }
  ],
  reducers: {
    addHabit: (state, action) => {
      state.push(action.payload);
    },
    updateDayStatus: (state, action) => {
      console.log(action?.payload?.id )
     state[action?.payload?.id -1 ].day[action?.payload?.index].status = action?.payload?.status;
    },
    addDay: (state, action) => {
      // state?.day?.push(action?.payload);

      state.map((habit) => {
        if(habit.day.length === 7){
          habit.day.shift();
          habit.day.push({
            status: action?.payload?.status,
            day: action?.payload?.day,
          });
        }
        else{
          habit.day.push({
            status: action?.payload?.status,
            day: action?.payload?.day,
          });
        }
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const {  addHabit, updateDayStatus, addDay } = updateHabitSlice.actions

export default updateHabitSlice.reducer