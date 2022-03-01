import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <ul>
            <li>
                <Link to="/red">RedPage</Link>
            </li>
            <li>
                <Link to="/blue">BluePage</Link>
            </li>
        </ul>
    );
};

export default Menu;
