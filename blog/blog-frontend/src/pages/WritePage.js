import React from 'react';
import Responsive from '../components/common/Responsive';
import HeaderContainer from '../containers/common/HeaderContainer';

import WriteActionButton from '../components/write/WriteActionButton';
import EditorContainer from '../containers/write/EditorContainer';
import TagBoxContainer from '../containers/write/TagBoxContainer';

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <EditorContainer />
        <TagBoxContainer />
        <WriteActionButton />
      </Responsive>
    </>
  );
}

export default WritePage;
