import "../index.css";

const SubjectNavItem = (props) => {
  const chooseSubject = (subject) => {
    console.log(subject);
  }
  return (
    <div className='Navigation-Items' onClick={() => chooseSubject(props.subjectName)}>{props.subjectName}</div>
  )
}

const subjects = ["Maths", "Computer Science", "bla bla bla"];

const SubjectNav = () => {
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