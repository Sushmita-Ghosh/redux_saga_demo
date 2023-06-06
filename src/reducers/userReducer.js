import { createReducer, createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "Ramesh",
  age: 20,
  joke: "",
};

// const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_NAME_SUCCEEDED", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase("UPDATE_AGE_SUCCEEDED", (state, action) => {
//     state.age = action.payload;
//   });
//   builder.addCase("JOKE_SUCCESS", (state, action) => {
//     state.joke = action.payload;
//   });
// });

const userReducer = createSlice({
  name: "myapp",
  initialState,
  reducers: {
    updateName(state, action) {
      state.name = action.payload;
    },
    updateAge(state, action) {
      state.age = action.payload;
    },
    updateJoke(state, action) {
      state.joke = action.payload;
    },
  },
});

// export default userReducer;

export const { updateAge, updateName, updateJoke } = userReducer.actions;
export default userReducer.reducer;
