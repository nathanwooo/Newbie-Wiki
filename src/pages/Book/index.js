import ChapterNav from "./components/ChapterNav";
import Bookmark from "../../components/Bookmark";
import MarkdownViewer from "../../components/MarkdownViewer";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


const Book = () => {
    const location = useLocation();
    const [filepath, setFilepath] = useState('');
    const handleChapterChange = (chapter) => {
        setFilepath(`./markdowns/${location.state.subject}/${location.state.course}/${chapter}`);
        console.log(filepath);
    }
    return (
        <div>
            <div className="LeftContainer">
                <ChapterNav subject={location.state.subject} course={location.state.course} onChapterChange={handleChapterChange} />
                <Bookmark />
            </div>
            <div className="RightMarkdownContainer">
                <button>bookmark this</button>
                <MarkdownViewer filepath={filepath}/>
            </div>
        </div>
    )
}

export default Book;