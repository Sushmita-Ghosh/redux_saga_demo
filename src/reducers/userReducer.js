import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  name: "Ramesh",
  age: 20,
};

const userReducer = createReducer(initialState, (builder) => {
  builder.addCase("UPDATE_NAME", (state, action) => {
    state.name = action.payload;
  });
});

export default userReducer;
