import logo from './logo.svg';
import './App.css';

const SubjectNav = (props) => {
  const chooseSubject = (subject) => {
    console.log(subject);
  }
  return (
    <div className='Navigation-Items' onClick={() => chooseSubject(props.subjectName)}>{props.subjectName}</div>
  )
}


function App() {
  const subjects = ["Maths", "Computer Science"]
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
