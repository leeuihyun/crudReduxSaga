import React from "react";

const array = {
    vanc: {
        name: "반씨",
        description: "프론트엔드 리액트 개발자가 될 거야",
    },
    lee: {
        name: "의현",
        description: "리액트를 개발해보자",
    },
};

function Profile({ match }) {
    const { nickname } = match.params;
    const profile = array[nickname];
    if (!profile) {
        return <h1>존재하지 않는 사용자입니다 ! gg</h1>;
    }
    return (
        <div>
            <h2>닉네임 : {nickname}</h2>
            <h2>사용자명 : {profile.name}</h2>
            <h2>설명 : {profile.description}</h2>
        </div>
    );
}

export default Profile;
