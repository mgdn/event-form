import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    //mock user
    id: 2,
    name: "Philip",
    lastname: "Hughes",
    email: "philip.hughes@hussa.rs",
  },
});

export const selectUser = (state) => ({
  user: state.user,
});

export default userSlice.reducer;
