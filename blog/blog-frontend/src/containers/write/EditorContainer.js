import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import { useEffect, useCallback } from 'react';
import Editor from '../../components/write/Editor';

const EditorContainer = () => {
  const { title, body } = useSelector(({ write }) => ({
    title: write.title,
    body: write.body,
  }));
  const dispatch = useDispatch();

  const onChangeField = useCallback(
    (payload) => dispatch(changeField(payload)),
    [dispatch],
  );
  useEffect(() => {
    return () => {
      dispatch(initialize());
    };
  }, [dispatch]); //언마운트될때 초기화
  return (
    <Editor onChangeField={onChangeField} title={title} body={body}></Editor>
  );
};

export default EditorContainer;
