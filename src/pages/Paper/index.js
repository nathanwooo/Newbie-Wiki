import ChapterNav from "../Book/components/ChapterNav";
import Bookmark from "../../components/Bookmark";
import PaperItem from "./components/PaperItem";
import JournalNav from "./components/JournalNav";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";


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