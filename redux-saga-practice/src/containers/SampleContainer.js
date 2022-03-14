import React from "react";
import Sample from "../components/Sample";
import { getPost, getUsers } from "../modules/sample";
import { useSelector, useDispatch } from "react-redux";
function SampleContainer() {
    const { post, users, loadingPost, loadingUsers } = useSelector(
        ({ sample }) => ({
            post: sample.post,
            users: sample.users,
        })
    );
    return <Sample loadingPost={loadingPost}></Sample>;
}

export default SampleContainer;
