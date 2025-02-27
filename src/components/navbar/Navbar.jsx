import "./navbar.scss"
import HomeIcon from '@mui/icons-material/Home';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlined from '@mui/icons-material/DarkModeOutlined';
import StoreIcon from '@mui/icons-material/Store';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import EggIcon from '@mui/icons-material/Egg';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {

  const {toggle, darkMode} = useContext(DarkModeContext);
  const {currentUser} = useContext(AuthContext);

  return (
    <div className='navbar'>
      <div className="left">
        <span>Lounge</span>
        <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
        <HomeIcon />
        </Link>
        {darkMode ? ( <WbSunnyOutlinedIcon onClick={toggle} /> ):(<DarkModeOutlined onClick={toggle}/>)}
        <Link to = {`/egg/${currentUser.id}` } style={{textDecoration: "none", color: "inherit"}}>
          <EggIcon />
        </Link>
        <StoreIcon/>
        <Link to = {`/messages/${currentUser.id}` } style={{textDecoration: "none", color: "inherit"}}>
          <ChatBubbleIcon/>
        </Link> 

        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="Search..." />
        </div>
      </div> 
      <div className="right">
        <PersonOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsOutlinedIcon/>
        <div className="user">
          <img src={currentUser.profilePic} alt=""  />
          <span>{currentUser.name}</span>
        </div>

      </div>      
    </div>
  )
}

export default Navbar
