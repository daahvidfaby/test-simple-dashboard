import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import StoreIcon from '@mui/icons-material/Store';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";


const Sidebar = () => {

  const {dispatch} = useContext(DarkModeContext);

  return (
    <div className="sidebar">

    <div className="sidebar__top">
      <Link to={"/"} style={{textDecoration:'none'}}>
        <div className="sidebar__logo">Logo</div>  
      </Link>
    </div>
    <hr />
    <div className="sidebar__center">
      <ul>
        <p className="sidebar__title">MAIN</p>
        <li>
        <Link to={"/"} style={{textDecoration:'none'}}>
          <DashboardIcon className="icon"/>
          <span>Dashboard</span>
        </Link>
          
        </li>
        <p className="sidebar__title">LISTS</p>
        <li>
          <Link to={"/users"} style={{textDecoration:'none'}}>
            <PersonIcon className="icon"/>
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link to={"/products"} style={{textDecoration:'none'}}>
            <StoreIcon className="icon"/>
            <span>Products</span>
          </Link>
        </li>
        <li>
          <CreditCardIcon className="icon"/>
          <span>Orders</span>
        </li>
        <li>
          <LocalShippingIcon className="icon"/>
          <span>Delivery</span>
        </li>
        <p className="sidebar__title">USEFUL</p>
        <li>
          <InsertChartIcon className="icon"/>
          <span>Stats</span>
        </li>
        <li>
          <NotificationsIcon className="icon"/>
          <span>Notifications</span>
        </li>
        <p className="sidebar__title">SERVICE</p>
        <li>
          <SettingsSystemDaydreamIcon className="icon"/>
          <span>System health</span>
        </li>
        <li>
          <PsychologyIcon className="icon"/>
          <span>Logs</span>
        </li>
        <li>
          <SettingsApplicationsIcon className="icon"/>
          <span>Settings</span>
        </li>
        <p className="sidebar__title">USER</p>
        <li>
          <AccountCircleIcon className="icon"/>
          <span>Profile</span>
        </li>
        <li>
          <LogoutIcon className="icon"/>
          <span>Logout</span>
        </li>
      </ul>  
    </div>
    <div className="sidebar__bottom">
      <div className="color-option" onClick={() => dispatch({ type : 'LIGHT'})}></div>  
      <div className="color-option" onClick={() => dispatch({ type : 'DARK'})}></div>  
    </div>

    </div>
  )
}

export default Sidebar