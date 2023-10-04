
import "./Sidebar.css";
import { RssFeed , Chat, VideoCall, Group,Bookmark,QuestionMark} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sideBar">
      <div className="wrapper">
        <ul className="sidebarList">
            <li className="sidebarListItem">
            <RssFeed className="sidebarIcon"/>
            <span className="sidebarListItemText">Feed</span></li>
            <li className="sidebarListItem">
            <Chat className="sidebarIcon"/>
            <span className="sidebarListItemText">Chat</span></li>
            <li className="sidebarListItem">
            <VideoCall className="sidebarIcon"/>
            <span className="sidebarListItemText">Video</span>
            </li>
            <li className="sidebarListItem">
            <Group className="sidebarIcon"/>
            <span className="sidebarListItemText">Groups</span></li>
            <li className="sidebarListItem">
            <Bookmark className="sidebarIcon"/>
            <span className="sidebarListItemText">Bookmarks</span></li>
            <li className="sidebarListItem">
            <QuestionMark className="sidebarIcon"/>
            <span className="sidebarListItemText">QuestionMark</span></li>
           
        </ul>
        <button className="sidebarButton">
            Show More
        </button>
        <hr/>
        <ul className="sidebarFriendList">
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li> 
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
<li className="sidebarFriend">
<img className="sidebarFriendImg" src="https://www.nicepng.com/png/full/154-1545787_tokyo-ghoul-imagines-graphic-free-library-touka-kirishima.png" alt=""/>
<span className="sidebarFriendName">Touka</span>
</li>
</ul>
      </div>
    </div>
  );
}
