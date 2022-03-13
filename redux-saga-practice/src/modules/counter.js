import { createAction, handleActions } from "redux-actions";
import { put, delay, takeEvery, takeLatest } from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined); //마우스 이벤트가 payload 안에 들어가지 않기 위해서 ()=>undefined
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
    yield delay(2000);
    yield put(increase()); //특정 액션을 디스패치한다 (put)
}

function* decreaseSaga() {
    yield delay(2000);
    yield put(decrease());
}
export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga); //들어오는 모든 액션에 대해 특정 작업을 처리해 준다.
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); //기존에 진행 중이던 작업이 있다면 취소처리하고 가장 마지막에 실행된 작업만 수행한다.
}

const initialState = {
    number: 0,
};

const counter = handleActions(
    {
        [INCREASE]: (state) => ({
            number: state.number + 1,
        }),
        [DECREASE]: (state) => ({
            number: state.number - 1,
        }),
    },
    initialState
);

export default counter;
