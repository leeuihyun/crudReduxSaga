import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import HeaderContainer from '../containers/common/HeaderContainer';
import TagBox from '../components/write/TagBox';

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Editor />
        <TagBox />
      </Responsive>
    </>
  );
}

export default WritePage;
