import React from "react";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
function SampleContainer() {
    return <Sample loadingPost={loadingPost}></Sample>;
}

export default SampleContainer;
