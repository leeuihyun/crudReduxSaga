import NewsList from "../components/NewsList";
import { checkArticle, checkLoading, checkCategory } from "../modules/news";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";
import Categories from "../components/Categories";

const NewsContainer = () => {
    const articles = useSelector((state) => state.news.articles);
    const loading = useSelector((state) => state.news.loading);
    const category = useSelector((state) => state.news.category);

    const dispatch = useDispatch();
    const setLoading = useCallback(
        (it) => dispatch(checkLoading(it)),
        [dispatch]
    );
    const setArticle = useCallback(
        (it) => dispatch(checkArticle(it)),
        [dispatch]
    );
    const setCategory = useCallback(
        (data) => dispatch(checkCategory(data)),
        [dispatch]
    );
    return (
        <>
            <Categories
                category={category}
                setCategory={setCategory}
            ></Categories>
            <NewsList
                articles={articles}
                loading={loading}
                setLoading={setLoading}
                setArticle={setArticle}
                category={category}
            ></NewsList>
        </>
    );
};

export default NewsContainer;
