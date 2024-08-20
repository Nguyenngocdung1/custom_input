import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadings",
  initialState: {
    loading: false,
  },
  reducers: {
    showLoading: (state, action) => {
      state.loading = true;
    },
    hideLoading: (state, action) => {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {},
});

export const { showLoading, hideLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
