import React from "react";
import { Route } from "react-router-dom";
import Profiles from "./components/Profiles";
import Home from "./components/Home";
import About from "./components/About";
import { Link } from "react-router-dom";
function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">홈페이지</Link>
                </li>
                <li>
                    <Link to="/about">소개</Link>
                </li>
                <li>
                    <Link to="/about?detail=true">이건되나?</Link>
                </li>
                <li>
                    <Link to="/profiles">프로필</Link>
                </li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact />
            <Route path={["/about", "/info"]} component={About}></Route>
            <Route path="/profiles" component={Profiles} />
        </div>
    );
}

export default App;
