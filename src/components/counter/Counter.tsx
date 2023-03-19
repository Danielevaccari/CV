import Button from "@mui/material/Button/Button";
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/Reducers/counterReducer";
import { RootState } from "../../redux/store";

function Counter() {
    const counter = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch();

    return (
        <>
            <Button onClick={() => dispatch(increment())}>Increment</Button>
            <Button onClick={() => dispatch(decrement())}>Decerement</Button>
            <div>{counter.counterValue}</div>
        </>
    );
}

export default Counter;
