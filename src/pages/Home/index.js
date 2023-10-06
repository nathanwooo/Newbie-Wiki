import SubjectNav from "./components/SubjectNav";
import BookItem from "./components/BookItem";
import Bookmark from "../../components/Bookmark";
import './index.css';

const subjects = ["Maths", "Computer Science"];

const Home = ({ text }) => {
    return (
        <div>
            <div className="LeftContainer">
                <SubjectNav />
                <Bookmark />
            </div>
            <div className="RightContainer">
                <BookItem text={"Linear Algebra"}/>
                <BookItem text={"Calculus"}/>
                <BookItem text={"Machine Learing"}/>
                <BookItem text={"Deep Learning"}/>
            </div>
        </div>
    );
};
  
export default Home;