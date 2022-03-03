import React from 'react';
import NewsItem from './NewsItem';
import axios from 'axios';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

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
function NewsList() {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49',
        );
        setArticles(res.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);
  if (loading) {
    return <NewsListBox>로딩중...</NewsListBox>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBox>
      {articles.map((article) => (
        <NewsItem article={article} key={article.url} />
      ))}
    </NewsListBox>
  );
}

export default NewsList;
