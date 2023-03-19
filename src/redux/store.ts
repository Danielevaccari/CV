import { configureStore, Store } from "@reduxjs/toolkit";
import { counterSlice } from "./Reducers/counterReducer";

export const store: Store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
