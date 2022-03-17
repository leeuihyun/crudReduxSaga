import { useSelector, useDispatch } from 'react-redux';
import PostViewer from '../../components/post/PostViewer';
import { useEffect } from 'react';
import { readPost, unloadPost } from '../../modules/post';

const PostViewerContainer = ({ match }) => {
  const { post, error, loading } = useSelector(({ post, loading }) => ({
    post: post.post,
    error: post.error,
    loading: loading['post/READ_POST'],
  }));
  const dispatch = useDispatch();
  const { postId } = match.params;

  useEffect(() => {
    dispatch(readPost(postId));
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);
  return <PostViewer post={post} error={error} loading={loading}></PostViewer>;
};

export default PostViewerContainer;
