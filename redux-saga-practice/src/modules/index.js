import { combineReducers } from "redux";
import counter, { counterSaga } from "./counter";
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
    counter,
});

export function* rootSaga() {
    yield all([counterSaga()]); //all함수는 여러 사가를 합쳐준다.
}

export default rootReducer;
