import Bookmark from "../../components/Bookmark";
import PaperItem from "./components/PaperItem";
import JournalNav from "./components/JournalNav";


const Paper = () => {
    return (
        <div>
            <div className="LeftContainer">
                <JournalNav />
                <Bookmark />
            </div>
            <div className="RightMarkdownContainer">
                <PaperItem />
            </div>
        </div>
    )
}

export default Paper;