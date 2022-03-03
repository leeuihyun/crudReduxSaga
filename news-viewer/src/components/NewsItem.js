import React from 'react';
import styled from 'styled-component';

const NewsItemBox = styled.div`
  display: flex;
  .thumbnail {
    margin-right: 1rem;
    margin-left: 1rem;
    .img {
      display: block;
      width: 160px;
      height: 160px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }

  & + & {
    margin-top: 3rem;
  }
`;
function NewsItem({ article }) {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBox>
      <div className="thumbnail">
        {urlToImage && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail"></img>
          </a>
        )}
        <div className="contents">
          <h2>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
          </h2>
          <p>{description}</p>
        </div>
      </div>
    </NewsItemBox>
  );
}

export default NewsItem;