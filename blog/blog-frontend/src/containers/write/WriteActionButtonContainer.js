import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import WriteActionButton from '../../components/write/WriteActionButton';
import { writePost } from '../../modules/write';

const WriteActionButtonContainer = ({ history }) => {
  const { title, body, tags, post, postError } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
    tags: write.tags,
    post: write.post,
    postError: write.postError,
  }));
  const dispatch = useDispatch();
  const onPublish = (e) => {
    e.preventDefault();
    dispatch(writePost({ title, body, tags }));
  };
  const onCancel = (e) => {
    history.goBack();
  };
  useEffect(() => {
    if (post) {
      const { _id, user } = post;
      history.push(`/@${user.username}/${_id}`);
    }
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return (
    <WriteActionButton
      onPublish={onPublish}
      onCancel={onCancel}
    ></WriteActionButton>
  );
};

export default withRouter(WriteActionButtonContainer);
