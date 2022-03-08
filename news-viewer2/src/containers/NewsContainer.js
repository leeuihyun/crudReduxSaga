import NewsList from "../components/NewsList";
import { checkArticle, checkLoading } from "../modules/news";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

const NewsContainer = () => {
    const articles = useSelector((state) => state.news.articles);
    const loading = useSelector((state) => state.news.loading);
    const dispatch = useDispatch();
    const setLoading = useCallback(
        (it) => dispatch(checkLoading(it)),
        [dispatch]
    );
    const setArticle = useCallback(
        (it) => dispatch(checkArticle(it)),
        [dispatch]
    );
    return (
        <NewsList
            articles={articles}
            loading={loading}
            setLoading={setLoading}
            setArticle={setArticle}
        ></NewsList>
    );
};

export default NewsContainer;
