import { useEffect, useState } from 'react';
import './App.css';

const SubjectNav = (props) => {
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

const CourseCard = (props) => {
  return (
    <div className='Course-Card'>
      <h2>{props.courseName}</h2>
    </div>
  )
}

function App() {
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
    <>
      <div className="App">        
          <div className='App-Name'>
            <h1>Newbie Wiki</h1>
          </div>
          <div className='Navigation-Bar'>          
            {subjects.map((subject) => <SubjectNav subjectName={subject}/>)}      
          </div>    
        </div>
      
    </>
  );
}

export default App;
