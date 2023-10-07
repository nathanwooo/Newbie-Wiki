import React, { useEffect, useState } from 'react';
const ChapterNavItem = (props) => {
    const chooseChapter = (chapter) => {
      props.onChapterChange(chapter);
    }
    return (
      <div className='Navigation-Items' onClick={() => chooseChapter(props.chapterName)}>{props.chapterName}</div>
    )
  } 
  
  const ChapterNav = (props) => {
    const [Chapters, setChapters] = useState([]); 
    useEffect(() => {
      const fetchChapters = async () => {
          try {
              const response = await fetch('http://localhost:5000/api/getChapters', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ subject: props.subject, course: props.course }),
              });
              const data = await response.json();
              setChapters(data);
              if (data.length > 0) {
                props.onChapterChange(data[0]);
              }
          } catch (error) {
              alert(error);
          }
      }
      fetchChapters();
    }, []);
      return (
          <div className="Navigation-Bar">
            Chapters: 
            <br></br>
            <br></br>
              {Chapters.map((chapter) => <ChapterNavItem chapterName={chapter} onChapterChange={props.onChapterChange}/>)}
          </div>
      );
  };
    
  export default ChapterNav;