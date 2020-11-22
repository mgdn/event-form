import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "../features/categories/categoriesSlice";
import coordinatorsReducer from "../features/coordinators/coordinatorsSlice";
import eventsReducer from "../features/events/eventsSlice";
import userReducer from "../features/user/userSlice";

export default configureStore({
  reducer: {
    categories: categoriesReducer,
    coordinators: coordinatorsReducer,
    events: eventsReducer,
    user: userReducer,
  },
});
