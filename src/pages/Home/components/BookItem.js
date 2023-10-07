import '../index.css';
import { useNavigate } from "react-router-dom";

const BookItem = (props) => {
    const navigation = useNavigate();
    const openBook = () => {
        navigation('/book',
            {
                state: {
                    subject: props.subject,
                    course: props.course
                }
            });
    }
    return (
        <div className="BookBlock">
            <p className="BookText">{props.course}</p>
            <button className='BookButton' onClick={openBook}>read</button>
        </div>
    );
};
  
export default BookItem;