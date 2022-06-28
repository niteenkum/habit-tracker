import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { initialState } from "./intialstate";
import { State } from "./types";
import habitReducer from "./reducers/updateHabit";
export const saveState = (state: State) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.warn(e);
  }
};

export const loadState = (): State | undefined => {
  try {
    const serializedState = localStorage.getItem("state");

    if (serializedState === null) {
      return undefined;
    }
    const state = JSON.parse(serializedState) as State;
    return state;
  } catch (err) {
    console.warn(err);
    return undefined;
  }
};
export function createReduxStore() {
  const appReducer = combineReducers({
    habitData: habitReducer,
  });

  const rootReducer = (state: any, action: any) => {
    if (action.type === "LOGOUT") {
      state = initialState.habitData;
      // return appReducer(undefined, action);
    }
    return appReducer(state.habitData, action);
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: loadState(),
  });
  store.subscribe(() => {
    saveState(store.getState());
  });
  return store;
}
