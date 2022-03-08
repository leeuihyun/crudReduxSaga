import React from "react";
import styled, { css } from "styled-components";

const categories = [
    {
        name: "all",
        text: "전체보기",
    },
    {
        name: "business",
        text: "비즈니스",
    },
    {
        name: "entertainment",
        text: "엔터테인먼트",
    },
    {
        name: "science",
        text: "과학",
    },
    {
        name: "sports",
        text: "스포츠",
    },
    {
        name: "technology",
        text: "기술",
    },
];

const CategoryBox = styled.div`
    display: flex;
    padding: 1rem;
    width: 765px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Category = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    white-space: pre;
    padding-bottom: 0.25rem;
    &:hover {
        color: white;
        background-color: black;
    }
    & + & {
        margin-left: 1rem;
    }
    ${(props) =>
        props.active &&
        css`
            font-weight: 600;
            border-bottom: 2px solid #22b8cf;
            color: #22b8cf;
            &:hover {
                color: #3bc9db;
            }
        `}
`;
function Categories({ category, setCategory }) {
    return (
        <CategoryBox>
            {categories.map((item) => (
                <Category
                    key={item.name}
                    active={category === item.name}
                    onClick={() => setCategory(item.name)}
                >
                    {item.text}
                </Category>
            ))}
        </CategoryBox>
    );
}

export default Categories;
