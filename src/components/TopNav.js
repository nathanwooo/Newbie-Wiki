import "./style.css"
import { Link } from 'react-router-dom';

// const ToptNavItem = (props) => {
//     const choosePage = (page) => {
//       console.log(page);
//     }
//     return (
//       <a className='TopNav-Items' onClick={() => choosePage(props.pageName)}>{props.pageName}</a>
//     )
//   }
  
const pages = ["Recollection", "Chase", "README"];
  
const TopNav = () => {
    return (
        <div className="TopNav">
          <Link to="/" className="TopNav-Items">Recollection</Link>
          <Link to="/paper" className="TopNav-Items">Chase</Link>
          <Link to="/" className="TopNav-Items">README</Link>
            {/* {pages.map((page) => <ToptNavItem key={page} pageName={page}/>)} */}
        </div>
    );
};
    
export default TopNav;