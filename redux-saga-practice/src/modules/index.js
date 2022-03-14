import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import { all } from "redux-saga/effects";
import loading from "./loading";
import sample, { sampleSaga } from "./sample";

const rootReducer = combineReducers({
    counter,
    loading,
    sample,
});

export function* rootSaga() {
    yield all([counterSaga(), sampleSaga()]); //all함수는 여러 사가를 합쳐준다.
}

export default rootReducer;
