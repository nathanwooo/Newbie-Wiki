import { useNavigate } from "react-router-dom";

const BookmarkItem = (props) => {
    const navigation = useNavigate();
    const openBook = () => {
        console.log(props.subject);
        console.log(props.course);
        navigation('/book',
            {
                state: {
                    subject: props.subject,
                    course: props.course
                }
            });
    }

    return (
        <div className="Navigation-Items" onClick={openBook}>
            {props.course}
        </div>
    )
}

export default BookmarkItem;