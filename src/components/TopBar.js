import "./style.css"

const TopBar = () => {
    return (
        <div className="topbar">
            <a>NewbieWiki</a>
            <div className="topbar-right">
                <a>Eng / 中</a>
                <a>Account</a>
            </div>
        </div>
    );
}

export default TopBar;