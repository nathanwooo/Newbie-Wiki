import '../index.css';

const BookItem = ({ text }) => {
    return (
        <div className="BookBlock">
            <p className="BookText">{text}</p>
            <button className='BookButton'>read</button>
        </div>
    );
};
  
export default BookItem;