import React from "react";
import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBox = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

function NewsList({ articles, setArticle, loading, setLoading }) {
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49"
                );
                setArticle(res.data.articles);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);
    if (loading) return <NewsListBox>로딩중 . . . </NewsListBox>;
    if (!articles) {
        return null;
    }
    return (
        <NewsListBox>
            {articles.map((article) => (
                <NewsItem key={article.url} article={article}></NewsItem>
            ))}
        </NewsListBox>
    );
}

export default NewsList;
