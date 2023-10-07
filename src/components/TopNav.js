import "./style.css"

const ToptNavItem = (props) => {
    const choosePage = (page) => {
      console.log(page);
    }
    return (
      <a className='TopNav-Items' onClick={() => choosePage(props.pageName)}>{props.pageName}</a>
    )
  }
  
const pages = ["Recollection", "Chase", "README"];
  
const TopNav = () => {
    return (
        <div className="TopNav">
            {pages.map((page) => <ToptNavItem key={page} pageName={page}/>)}
        </div>
    );
};
    
export default TopNav;