import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../api";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCategoriesStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess(state, action) {
      state.categories = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCategoriesFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCategoriesStart,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categoriesSlice.actions;

export const fetchCategories = () => (dispatch) => {
  dispatch(getCategoriesStart());
  getCategories()
    .then((categories) => dispatch(getCategoriesSuccess(categories)))
    .catch((error) => dispatch(getCategoriesFailure(error)));
};

export const selectCategories = (state) => ({
  categories: state.categories.categories,
  loading: state.categories.loading,
});

export default categoriesSlice.reducer;
