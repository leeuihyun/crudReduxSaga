import styled from 'styled-components';
import palette from '../../lib/styles/palette';
import React from 'react';
import { useState, useCallback } from 'react';
import { useEffect } from 'react';

const TagBoxBlock = styled.div`
  width: 100%;
  border-top: 1px solid ${palette.gray[2]};
  padding-top: 2rem;
  h4 {
    color: ${palette.gray[8]};
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`;

const TagForm = styled.form`
  border-radius: rpx;
  overflow: hidden;
  display: flex;
  width: 256px;
  border: 1px solid ${palette.gray[9]};
  input,
  button {
    outline: none;
    border: none;
    font-size: 1rem;
  }
  input {
    padding: 0.5rem;
    flex: 1;
    min-width: 0;
  }
  button {
    cursor: pointer;
    padding-right: 1rem;
    padding-left: 1rem;
    border: none;
    background: ${palette.gray[8]};
    color: white;
    font-weight: bold;
    &:hover {
      background: ${palette.gray[4]};
    }
  }
`;

const Tag = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;

const TagListBlock = styled.div`
  display: flex;
  margin-top: 0.5rem;
`;

//React.memo 를 써서 tag값이 바뀔 때만 리렌더링되도록 처리한다.
const TagItem = React.memo(({ tag, onRemove }) => (
  <Tag onClick={() => onRemove(tag)}>#{tag}</Tag>
));

//React.memo 를 써서 tags값이 바뀔 때만 리렌더링되도록 처리한다.
const TagList = React.memo(({ tags, onRemove }) => (
  <TagListBlock>
    {tags.map((tag) => (
      <TagItem tag={tag} key={tag} onRemove={onRemove} />
    ))}
  </TagListBlock>
));

const TagBox = ({ onChangeTags, tags }) => {
  const [input, setInput] = useState('');
  const [localTags, setLocalTags] = useState([]);

  const onRemove = useCallback(
    (tag) => {
      const newTags = setLocalTags(localTags.filter((t) => t !== tag));
      onChangeTags(newTags);
    },
    [localTags, onChangeTags],
  );
  const onChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);
  const insertTag = useCallback(
    (tag) => {
      if (!tag) return; //공백이라면 추가하지 않음
      if (localTags.includes(tag)) return;
      const nextTags = [...localTags, tag];
      setLocalTags(nextTags);
      onChangeTags(nextTags);
    },
    [localTags, onChangeTags],
  );
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      insertTag(input.trim()); // 앞뒤 공백을 없앤 후 등록
      setInput(''); //input을 다시 초기화.
    },
    [input, insertTag],
  );
  useEffect(() => {
    setLocalTags(tags);
  }, [tags]);
  return (
    <TagBoxBlock>
      <h4>태그</h4>
      <TagForm onSubmit={onSubmit}>
        <input
          onChange={onChange}
          placeholder="태그를 입력하세요"
          value={input}
        />
        <button type="submit">추가</button>
      </TagForm>
      <TagList onRemove={onRemove} tags={localTags} />
    </TagBoxBlock>
  );
};

export default TagBox;
