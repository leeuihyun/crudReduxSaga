import { useSelector, useDispatch } from 'react-redux';
import { changeField, initialize } from '../../modules/write';
import TagBox from '../../components/write/TagBox';
import { useEffect } from 'react';

const TagBoxContainer = () => {
  const { tags } = useSelector(({ write }) => ({
    tags: write.tags,
  }));
  const dispatch = useDispatch();
  const onChangeTags = (payload) => {
    dispatch(
      changeField({
        key: 'tags',
        value: payload,
      }),
    );
  };
  useEffect(() => {
    dispatch(initialize());
  }, [dispatch]);
  return <TagBox onChangeTags={onChangeTags} tags={tags}></TagBox>;
};

export default TagBoxContainer;
