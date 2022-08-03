import { createSlice } from "@reduxjs/toolkit";

const date = new Date();

export const shellSlice = createSlice({
  name: "shell",
  initialState: {
    time: date.toLocaleTimeString([], {
      timeStyle: "short",
    }),
    isStartOpen: false,
  },
  reducers: {
    updateClock: (state) => {
      const date = new Date();
      state.time = date.toLocaleTimeString([], {
        timeStyle: "short",
      });
    },
    toggleStart: (state) => {
      state.isStartOpen = !state.isStartOpen;
    },
  },
});

export const selectShell = (state) => state;

export const { updateClock, toggleStart } = shellSlice.actions;

export default shellSlice.reducer;
