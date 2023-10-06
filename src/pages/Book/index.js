import ChapterNav from "./components/ChapterNav";
import Bookmark from "../../components/Bookmark";

const Book = () => {
    return (
        <div>
            <div className="LeftContainer">
                <ChapterNav />
                <Bookmark />
            </div>
            <div className="RightContainer">
            </div>
        </div>
    )
}

export default Book;