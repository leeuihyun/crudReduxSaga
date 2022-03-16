import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import HeaderContainer from '../containers/common/HeaderContainer';
import TagBox from '../components/write/TagBox';
import WriteActionButton from '../components/write/WriteActionButton';

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Editor />
        <TagBox />
        <WriteActionButton />
      </Responsive>
    </>
  );
}

export default WritePage;
