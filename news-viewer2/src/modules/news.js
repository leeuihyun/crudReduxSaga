import { createAction, handleActions } from "redux-actions";

const CHECK_ARTICLE = "news/CHECK_ARTICLE";
const CHECK_LOADING = "news/CHECK_LOADING";
const CHECK_CATEGORY = "news/CHECK_CATEGORY";

export const checkArticle = createAction(CHECK_ARTICLE, (articles) => articles);
export const checkLoading = createAction(CHECK_LOADING, (loading) => loading);
export const checkCategory = createAction(
    CHECK_CATEGORY,
    (category) => category
);

const initialState = {
    articles: null,
    loading: false,
    category: "all",
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
        [CHECK_CATEGORY]: (state, action) => ({
            ...state,
            category: action.payload,
        }),
    },
    initialState
);

export default news;
