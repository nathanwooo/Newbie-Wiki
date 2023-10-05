import "./style.css"

const TopBar = () => {
    return (
        <div className="topbar">
            <a>Newbie-Wiki</a>
            <div className="topbar-right">
                <a>Language</a>
                <a>Account</a>
            </div>
        </div>
    );
}

export default TopBar;