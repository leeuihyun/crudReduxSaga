import React from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import PostList from '../components/post/PostList';

function PostListPage() {
  return (
    <div>
      <HeaderContainer />
      <PostList />
    </div>
  );
}

export default PostListPage;
