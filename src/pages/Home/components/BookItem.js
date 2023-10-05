import '../index.css';

const BookItem = ({ text }) => {
    return (
        <div className="rectangleStyles">
            <p>{text}</p>
        </div>
    );
};
  
export default BookItem;