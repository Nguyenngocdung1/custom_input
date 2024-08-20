import { createSlice } from "@reduxjs/toolkit";

const drawSlice = createSlice({
  name: "draws",
  initialState: {
    listDrawInfo: [
      {
        drawTime: new Date(),
        winningNumber: 0,
        drawNumber: "",
        amount: 0,
      },
    ],
    winners: [],
    nextTime: new Date(),
    loading: false,
    drawSearch: {},
    resendTime: false,
    drawIdDefault: "",
    keyTime: 1,
    loadingPage: false,
    errorMessage: "",
  },
  reducers: {
    showErrorMessage: (state, action) => {
      state.errorMessage = action.payload.errorMessage;
    },
    hideErrorMessage: (state, action) => {
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {},
});

export const { hideErrorMessage, showErrorMessage } = drawSlice.actions;
export default drawSlice.reducer;
