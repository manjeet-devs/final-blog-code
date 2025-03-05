import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Set API Base URL (Replace with your backend URL)
const API_URL = "http://localhost:5000/api/categories";

// 🔹 Get all categories
export const fetchCategories = createAsyncThunk("categories/fetch", async () => {
  const response = await axios.get(API_URL);
  return response.data;
});

// 🔹 Create a new category
export const createCategory = createAsyncThunk("categories/create", async (categoryData) => {
  const response = await axios.post(API_URL, categoryData);
  return response.data;
});

// 🔹 Update category
export const updateCategory = createAsyncThunk("categories/update", async ({ id, categoryData }) => {
  const response = await axios.put(`${API_URL}/${id}`, categoryData);
  return response.data;
});

// 🔹 Delete category
export const deleteCategory = createAsyncThunk("categories/delete", async (id) => {
  await axios.delete(`${API_URL}/${id}`);
  return id;
});

// ✅ Category Slice
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createCategory.fulfilled, (state, action) => {
        state.categories.push(action.payload);
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        const index = state.categories.findIndex((cat) => cat._id === action.payload._id);
        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.categories = state.categories.filter((cat) => cat._id !== action.payload);
      });
  },
});

export default categorySlice.reducer;
