import "../index.css";
import React, { useState, useEffect } from "react";

const SubjectNavItem = ({ subjectName, chooseSubject }) => {
  return (
    <div
      className='Navigation-Items'
      onClick={() => chooseSubject(subjectName)}
    >
      {subjectName}
    </div>
  );
}


const SubjectNav = ({ onSubjectChange }) => {
  const [subjects, setSubjects] = useState([]);
  const [selectedSubject, setSelectedSubject] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('http://localhost:5000/api/getSubjects');
        const data = await response.json();
        setSubjects(data);
      } catch (error) {
        alert(error);
      }
    }
    fetchData();
    
  }, []);

  const chooseSubject = (subject) => {
    setSelectedSubject(subject);
    onSubjectChange(subject);     
  }

  return (
    <div className="Navigation-Bar">
      Subjects:
      <br></br>
      <br></br>
      {subjects.map((subject) => (
        <SubjectNavItem
          key={subject}
          subjectName={subject}
          chooseSubject={chooseSubject}
        />
      ))}
    </div>
  );
};

export default SubjectNav;