import React from 'react';
import Responsive from '../components/common/Responsive';
import Editor from '../components/write/Editor';
import HeaderContainer from '../containers/common/HeaderContainer';

function WritePage() {
  return (
    <>
      <HeaderContainer />
      <Responsive>
        <Editor />
      </Responsive>
    </>
  );
}

export default WritePage;
