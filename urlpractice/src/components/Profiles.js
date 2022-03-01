import React from "react";
import { Route, Link } from "react-router-dom";
import Profile from "./Profile";

function Profiles() {
    return (
        <div>
            <h1>사용자 목록</h1>
            <ul>
                <li>
                    <Link to="/profiles/vanc">vanc</Link>
                </li>
                <li>
                    <Link to="/profiles/lee">lee</Link>
                </li>
            </ul>
            <Route
                path="/profiles"
                exact
                render={() => <div>사용자를 선택해주세요</div>}
            />
            <Route path="/profiles/:nickname" component={Profile} />
        </div>
    );
}

export default Profiles;
