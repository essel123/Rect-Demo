// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./counterSlice"; // This is where you'll define your reducers
export const store = configureStore({
  reducer: {
    counter: counterReducer // Add your reducers here
  }
});



export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
