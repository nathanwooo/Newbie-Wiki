import ChapterNav from "./components/ChapterNav";
import Bookmark from "../../components/Bookmark";
import MarkdownViewer from "../../components/MarkdownViewer";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";


const Book = () => {
    const location = useLocation();
    
    return (
        <div>
            <div className="LeftContainer">
                <ChapterNav subject={location.state.subject} course={location.state.course} />
                <Bookmark />
            </div>
            <div className="RightMarkdownContainer">
                <MarkdownViewer filepath={"./markdowns/Maths/2222.md"}/>
            </div>
        </div>
    )
}

export default Book;