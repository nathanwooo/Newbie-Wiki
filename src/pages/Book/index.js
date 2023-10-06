import ChapterNav from "./components/ChapterNav";
import Bookmark from "../../components/Bookmark";
import MarkdownViewer from "../../components/MarkdownViewer";

const Book = () => {
    return (
        <div>
            <div className="LeftContainer">
                <ChapterNav />
                <Bookmark />
            </div>
            <div className="RightMarkdownContainer">
                <MarkdownViewer filepath={"./markdowns/Maths/2222.md"}/>
            </div>
        </div>
    )
}

export default Book;