import NewsList from "../components/NewsList";
import { checkArticle } from "../modules/news";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const NewsContainer = () => {
    const articles = useSelector((state) => state.news.articles);
    const dispatch = useDispatch();
    const setArticle = useCallback(
        (it) => dispatch(checkArticle(it)),
        [dispatch]
    );
    return <NewsList articles={articles} setArticle={setArticle}></NewsList>;
};

export default NewsContainer;
