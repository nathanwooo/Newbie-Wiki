import "./style.css"
import { NavLink } from 'react-router-dom';

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
          <NavLink to="/" className={({isActive}) => "TopNav-Items"+(isActive ? "-Active" : "")}>Recollection</NavLink>
          <NavLink to="/paper" className={({isActive}) => "TopNav-Items"+(isActive ? "-Active" : "")}>Chase</NavLink>
          <NavLink to="/readme" className={({isActive}) => "TopNav-Items"+(isActive ? "-Active" : "")}>README</NavLink>
            {/* {pages.map((page) => <ToptNavItem key={page} pageName={page}/>)} */}
        </div>
    );
};
    
export default TopNav;