import "./leftbar.scss"
import PeopleIcon from '@mui/icons-material/People';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import AlbumIcon from '@mui/icons-material/Album';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

const Leftbar = () => {

  const { currentUser } = useContext(AuthContext);

  return (
    <div className="leftBar">
    <div className="container">
      <div className="menu">

        <div className="item">
            <PeopleIcon />
            <span>Friends</span>
        </div>

        <div className="item">
          <AddReactionIcon />
          <span>Your Emoticons</span>
        </div>
        
        <div className="item">
          <PlayCircleFilledIcon />
          <span>Recommended</span>
        </div>

        <div className="item">
          <AlbumIcon />
          <span>Playlist</span>
        </div>

      </div>
      <hr />
      <div className="menu">
        <span>Your shortcuts</span>
        <div className="item">
          <CalendarMonthIcon />
          <span>Events</span>
        </div>
        <div className="item">
          <SettingsIcon />
          <span>Settings</span>
        </div>
        <div className="item">
          <LogoutIcon />
          <span>Logout</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Leftbar
