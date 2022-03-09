import React from 'react';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import RegisterPage from './pages/RegisterPage';
import WritePage from './pages/WritePage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Route path={['/', '/@:username']} component={PostListPage} exact></Route>
      <Route path="/login" component={LoginPage}></Route>
      <Route path="/register" component={RegisterPage}></Route>
      <Route path="/write" component={WritePage}></Route>
      <Route path="/@:username/:postId" component={PostPage}></Route>
    </>
  );
}

export default App;
