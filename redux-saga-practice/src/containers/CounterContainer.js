import { useSelector, useDispatch } from "react-redux";
import React, { useCallback } from "react";
import { increase, decrease } from "../modules/counter";
import Counter from "../components/Counter";

function CounterContainer() {
    const number = useSelector(({ counter }) => counter.number);
    const dispatch = useDispatch();

    const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
    const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);

    return (
        <Counter
            number={number}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
        ></Counter>
    );
}

export default CounterContainer;
