import "./navbar.scss"
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ListIcon from '@mui/icons-material/List';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Navbar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="navbar">
      <div className="navbar__wrapper">
        <div className="searchbar">
          <input type="text" placeholder="Search..." />
          <SearchIcon/>
        </div>

        <div className="navbar__items">
          <div className="navbar__item">
            <LanguageIcon className="icon"/>
            English
          </div>  
          <div className="navbar__item" onClick={() => dispatch({ type : 'TOGGLE'})}>
            <DarkModeIcon className="icon"/>
          </div>  
          <div className="navbar__item">
            <FullscreenExitIcon className="icon"/>
          </div>  
          <div className="navbar__item">
            <NotificationsIcon className="icon"/>
            <div className="counter">4</div>
          </div>  
          <div className="navbar__item">
            <ChatBubbleIcon className="icon"/>
            <div className="counter">2</div>
          </div>  
          <div className="navbar__item">
            <ListIcon className="icon"/>
          </div>
          <div className="navbar__item">
            <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
             alt=""
             className="avatar" />  
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar