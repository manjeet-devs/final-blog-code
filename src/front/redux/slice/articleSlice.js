import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

// **Fetch All Articles**
export const fetchArticles = createAsyncThunk("articles/fetchArticles", async () => {
  try {
    const response = await axios.get(`${API_URL}/articles`);
    return response.data;
  } catch (error) {
    return [];
  }
});

// **Fetch Single Article**
export const fetchArticleById = createAsyncThunk("articles/fetchArticleById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API_URL}/article/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Article not found");
  }
});

// **Create a New Article**
export const createArticle = createAsyncThunk("articles/createArticle", async (articleData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API_URL}/articles`, articleData, { withCredentials: true });
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Failed to create article");
  }
});

// **Delete Article**
export const deleteArticle = createAsyncThunk("articles/deleteArticle", async (id, { rejectWithValue }) => {
  try {
    await axios.delete(`${API_URL}/article/${id}`, { withCredentials: true });
    return id; // Return deleted article ID
  } catch (error) {
    return rejectWithValue(error.response?.data?.error || "Failed to delete article");
  }
});

const articleSlice = createSlice({
  name: "articles",
  initialState: {
    articles: [],
    article: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.articles = action.payload;
        state.loading = false;
      })
      .addCase(fetchArticleById.fulfilled, (state, action) => {
        state.article = action.payload;
      })
      .addCase(createArticle.fulfilled, (state, action) => {
        state.articles.push(action.payload);
      })
      .addCase(deleteArticle.fulfilled, (state, action) => {
        state.articles = state.articles.filter(article => article._id !== action.payload);
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.article = null;
        state.error = action.payload;
      });
  },
});

export default articleSlice.reducer;
