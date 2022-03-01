import React from "react";
import { Route } from "react-router-dom";
import Profile from "./components/Profile";
import Home from "./components/Home";
import { Link } from "react-router-dom";
function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile/vanc">vanc profile</Link>
                </li>
                <li>
                    <Link to="/profile/lee">lee's profile</Link>
                </li>
            </ul>
            <Route path="/" component={Home} exact />
            <Route path="/profile/:nickname" component={Profile} />
        </div>
    );
}

export default App;
