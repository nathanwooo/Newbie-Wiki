import SubjectNav from "./components/SubjectNav";
import TopBar from "../../components/TopBar";
import TopNav from "../../components/TopNav";
import BookItem from "./components/BookItem";
import Bookmark from "./components/Bookmark";
import './index.css';

const subjects = ["Maths", "Computer Science"];

const Home = ({ text }) => {
    return (
        <div>
            {/* <SubjectNav /> */}
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
            {/* <div className="BookContainer">
                <BookItem text={"Linear Algebra"}/>
                <BookItem text={"Calculus"}/>
                <BookItem text={"Machine Learning"}/>
                <BookItem text={"Deep Learning"}/>
                <BookItem text={"Microeconomics"}/>
            </div> */}
        </div>
    );
};
  
export default Home;