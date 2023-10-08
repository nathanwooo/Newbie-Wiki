import SubjectNav from "./components/SubjectNav";
import BookItem from "./components/BookItem";
import Bookmark from "../../components/Bookmark";
import { useState } from "react";
import axios from 'axios';

const Home = ({ text }) => {
    const [currentSubject, setCurrentSubject] = useState('');
    const [courses, setCourses] = useState([]);
    const handleSubjectChange = async (subject) => {
        try {
            setCurrentSubject(subject);
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
    
    const [selectedFile, setSelectedFile] = useState(null);
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
    
    const handleUpload = () => {
      if (selectedFile) {
        const formData = new FormData();
        formData.append('file', selectedFile);
        // console.log(formData);
        axios.post('http://localhost:5000/upload', formData)
          .then((response) => {
            console.log('File uploaded successfully');
          })
          .catch((error) => {
            console.error('Error uploading file:', error);
          });
      }
    };

    return (
        <div>
          <div className="LeftContainer">
              <SubjectNav onSubjectChange={handleSubjectChange}/>
              <Bookmark />
          </div>
          <div className="RightContainer">
            {courses.map((course) => (
                <BookItem key={course} subject={currentSubject} course={course} />
            ))}
            <div style={{border: "1px solid black", height: "3em"}}>
              <input type="file" onChange={handleFileChange} />
              <button onClick={handleUpload}>Upload</button>
            </div>  
          </div>
        </div>
    );
};
  
export default Home;