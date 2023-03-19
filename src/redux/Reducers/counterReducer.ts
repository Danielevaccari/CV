import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const counterRdeucerName = "counter";

type CounterState = {
    counterValue: number;
};

type IReduxStoreState = {
    counter: number;
};

const initialState: CounterState = {
    counterValue: 0,
};

export const counterSlice = createSlice({
    name: counterRdeucerName,
    initialState,
    reducers: {
        increment: state => {
            state.counterValue += 1;
        },
        decrement: state => {
            state.counterValue -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.counterValue += action.payload;
        },
    },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: IReduxStoreState) => state.counter;
