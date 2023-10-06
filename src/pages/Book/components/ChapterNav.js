const ChapterNavItem = (props) => {
    const chooseChapter = (chapter) => {
      console.log(chapter);
    }
    return (
      <div className='Navigation-Items' onClick={() => chooseChapter(props.chapterName)}>{props.chapterName}</div>
    )
  }
  
  const Chapters = ["1. Vector", "2. Matrix", "3. Linear Dependence", "4. bla bla bla"];
  
  const ChapterNav = () => {
      return (
          <div className="Navigation-Bar">
            Chapters: 
            <br></br>
            <br></br>
              {Chapters.map((chapter) => <ChapterNavItem chapterName={chapter}/>)}
          </div>
      );
  };
    
  export default ChapterNav;