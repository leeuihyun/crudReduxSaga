import { createAction, handleActions } from "redux-actions";

const CHECK_ARTICLE = "news/CHECK_ARTICLE";
const CHECK_LOADING = "news/CHECK_LOADING";

export const checkArticle = createAction(CHECK_ARTICLE, (articles) => articles);
export const checkLoading = createAction(CHECK_LOADING, (loading) => loading);
const initialState = {
    articles: null,
    loading: false,
};

const news = handleActions(
    {
        [CHECK_ARTICLE]: (state, action) => ({
            ...state,
            articles: action.payload,
        }),
        [CHECK_LOADING]: (state, action) => ({
            ...state,
            loading: action.payload,
        }),
    },
    initialState
);

export default news;
