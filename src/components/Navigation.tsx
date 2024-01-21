import exitSidebar from '../images/icon-close-menu.svg';
import Dropdown from './Dropdown';

import todoImg from '../images/icon-todo.svg';
import calenderImg from '../images/icon-calendar.svg';
import reminderImg from '../images/icon-reminders.svg';
import planningImg from '../images/icon-planning.svg';

interface SidebarProps {
  hideSidebar: string,
  setHideSidebar: Function
}

const Navigation = ({hideSidebar, setHideSidebar}:SidebarProps) => {
  const features = {
    "Todo List": todoImg,
    "Calender": calenderImg,
    "Reminders": reminderImg,
    "Planning": planningImg
  };
  const company = {
    "History": "none",
    "Our Team": "none",
    "Blog": "none"
  };
  return (
    <div className={"navigation-container " + hideSidebar}>
      <nav className="navigation">
        <img className='close-sidebar' onClick={() => {setHideSidebar('')}} src={exitSidebar} alt="exit sidebar" />
        <ul className="nav-item-container">
          <Dropdown title="Features" items={features}/>
          <Dropdown title="Company" items={company}/>
          <li>
            <p>Careers</p>
          </li>
          <li>
            <p>About</p>
          </li>
        </ul>
        <div className='registration-buttons-container'>
          <button className='login-button registration-button'>
            <p>Login</p>
          </button>
          <button className='register-button registration-button'>
            <p>Register</p>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
