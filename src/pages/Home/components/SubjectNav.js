import "../index.css";
import React, { useState, useEffect } from "react";
const SubjectNavItem = (props) => {
  const chooseSubject = async (subject) => {
    try{      
      const response = await fetch('http://localhost:5000/api/getCourses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({subject: subject}),
      });
      const data = await response.json();
      console.log(data);
    }
    catch(error){
      alert(error);
    }
  }
  
  return (
    <div className='Navigation-Items' onClick={() => chooseSubject(props.subjectName)}>{props.subjectName}</div>
  )
}



const SubjectNav = () => {
  const [subjects, setSubjects] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try{
        const response = await fetch('http://localhost:5000/api/getSubjects');
        const data = await response.json();
        setSubjects(data);
      }
      catch(error){
        alert(error);
      }      
    }
    fetchData();
  }, [])
  return (
      <div className="Navigation-Bar">
        Subjects: 
        <br></br>
        <br></br>
          {subjects.map((subject) => <SubjectNavItem subjectName={subject}/>)}
      </div>
  );
};
  
export default SubjectNav;