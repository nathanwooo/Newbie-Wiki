import SubjectNav from "./components/SubjectNav";
import BookItem from "./components/BookItem";
import Bookmark from "../../components/Bookmark";
import { useState } from "react";
import './index.css';

const Home = ({ text }) => {
    const [currentSubject, setCurrentSubject] = useState('');
    const [courses, setCourses] = useState([]);
    const handleSubjectChange = async (subject) => {
        try {
            const response = await fetch('http://localhost:5000/api/getCourses', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ subject: subject }),
            });
            const data = await response.json();
            setCourses(data);
          } catch (error) {
            alert(error);
          }
    }    
    return (
        <div>
            <div className="LeftContainer">
                <SubjectNav onSubjectChange={handleSubjectChange}/>
                <Bookmark />
            </div>
            <div className="RightContainer">
                {courses.map((course) => (
                    <BookItem key={course} text={course}/>
                ))}
                
            </div>
        </div>
    );
};
  
export default Home;