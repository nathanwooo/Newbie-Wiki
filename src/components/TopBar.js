import "./style.css"
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="topbar">
            <Link to="/" style={{ color: 'black' }}>NewbieWiki</Link>
            <div className="topbar-right">
                <a>Account</a>
            </div>
        </div>
    );
}

export default TopBar;