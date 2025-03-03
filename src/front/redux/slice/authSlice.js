import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// **Login User and Set Cookie**
export const loginUser = createAsyncThunk("auth/loginUser", async (credentials, { rejectWithValue }) => {
  try {
    await axios.post(`${API_URL}/login`, credentials, { withCredentials: true }); // 🔥 Backend sets HTTP-only cookie
    const response = await axios.get(`${API_URL}/user`, { withCredentials: true }); // Fetch user after login
    return response.data.user;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Login failed");
  }
});

// **Fetch User from Cookie**
export const fetchUser = createAsyncThunk("auth/fetchUser", async () => {
  try {
    const response = await axios.get(`${API_URL}/user`, { withCredentials: true });
    return response.data.user;
  } catch (error) {
    return null; // If not authenticated, return null
  }
});

// **Logout - Clear Cookie**
export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
});

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    isAuthenticated: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isAuthenticated = !!action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.isAuthenticated = false;
      });
  },
});

export default authSlice.reducer;
