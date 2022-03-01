import React from "react";
import qs from "qs";

function About({ location }) {
    const query = qs.parse(location.search, {
        ignoreQueryPrefix: true, //이 설정으로 문자열 맨앞의 ?를 생략한다.
    });
    const showDetail = query.detail === "true";
    return (
        <div>
            <h2>소개</h2>
            {showDetail && <p>detail값을 잘 지정하셨군요!</p>}
        </div>
    );
}

export default About;
