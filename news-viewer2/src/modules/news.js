import { createAction, handleActions } from "redux-actions";

const CHECK_ARTICLE = "news/CHECK_ARTICLE";

export const checkArticle = createAction(CHECK_ARTICLE, (articles) => articles);

const initialState = {
    articles: null,
};

const news = handleActions(
    {
        [CHECK_ARTICLE]: (state, action) => ({
            articles: action.payload,
        }),
    },
    initialState
);

export default news;
