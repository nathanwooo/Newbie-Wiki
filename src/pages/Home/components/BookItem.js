import '../index.css';
import { useNavigate } from "react-router-dom";

const BookItem = ({ text }) => {
    const navigation = useNavigate();
    const openBook = () => {
        navigation('/book');
    }
    return (
        <div className="BookBlock">
            <p className="BookText">{text}</p>
            <button className='BookButton' onClick={openBook}>read</button>
        </div>
    );
};
  
export default BookItem;