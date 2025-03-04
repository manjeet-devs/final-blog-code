import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// **Login User and Set Cookie**
export const appObj = createAsyncThunk("app/appObj", async () => {
  try {
    const response = await axios.get(`${API_URL}/`, { withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "somethings went worng");
  }
});


const authSlice = createSlice({
  name: "app",
  initialState: {
    appObject: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(appObj.fulfilled, (state, action) => {
        state.appObject = action.payload;
        state.error = null;
      })
  },
});

export default authSlice.reducer;
