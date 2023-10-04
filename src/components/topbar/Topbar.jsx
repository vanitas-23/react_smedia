import "./topbar.css";
import { Chat, Notifications, Person, Search } from "@mui/icons-material";
export default function Topbar() {
  return (
    <div className="topbarContainer">
       <div className="topbarLeft">
        <span className="logo">MySocica</span>
       </div>
       <div className="topbarcentre">
        <span className="searchbar">
             <Search className="searchIcon"/>
             <input placeholder="Search for friend,post or video" className="searchInput"/>
        </span>
       </div>
       <div className="topbarRight">
        <div className="topbarLinks">
        <span className="topbarLink">Homepage</span>
        <span className="topbarLink">TimeLine</span>
        </div>
        <div className="topbarIconItem">
          <Person/>
          <span className="topbarBadge">1</span> 
        </div>
        <div className="topbarIconItem">
          <Chat/>
          <span className="topbarBadge">2</span>
        </div>
        <div className="topbarIconItem">
          <Notifications/>
          <span className="topbarBadge">1</span>
        </div>
        <img className="topbarImg" src="https://i.pinimg.com/736x/e6/cf/82/e6cf825eb88f0699b5a99a7d488f9567.jpg" alt="Loading"></img>
       </div>
    </div>
  );
}
