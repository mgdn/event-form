import { createSlice } from "@reduxjs/toolkit";
import { getCoordinators } from "../../api";

export const coordinatorsSlice = createSlice({
  name: "coordinators",
  initialState: {
    coordinators: [],
    loading: false,
    error: null,
  },
  reducers: {
    getCoordinatorsStart(state) {
      state.loading = true;
      state.error = null;
    },
    getCoordinatorsSuccess(state, action) {
      state.coordinators = action.payload;
      state.loading = false;
      state.error = null;
    },
    getCoordinatorsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  getCoordinatorsStart,
  getCoordinatorsSuccess,
  getCoordinatorsFailure,
} = coordinatorsSlice.actions;

export const fetchCoordinators = () => (dispatch) => {
  dispatch(getCoordinatorsStart());
  getCoordinators()
    .then((coordinators) => dispatch(getCoordinatorsSuccess(coordinators)))
    .catch((error) => dispatch(getCoordinatorsFailure(error)));
};

export const selectCoordinators = (state) => ({
  coordinators: state.coordinators.coordinators,
  loading: state.coordinators.loading,
});

export default coordinatorsSlice.reducer;
