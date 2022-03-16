import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';
import TagBox from '../components/write/TagBox';
import WriteActionButton from '../components/write/WriteActionButton';
import EditorContainer from '../containers/write/EditorContainer';

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditorContainer />
        <TagBox />
        <WriteActionButton />
      </Responsive>
    </>
  );
}

export default WritePage;
