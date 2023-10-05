import '../index.css';

const BookItem = ({ text }) => {
    return (
        <div className="rectangleStyles">
            <p className="BookText">{text}</p>
            <button className='BookButton'>read</button>
        </div>
    );
};
  
export default BookItem;