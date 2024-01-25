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
  const features = new Map([
    ["Todo List", todoImg ],
    ["Calender", calenderImg],
    ["Reminders", reminderImg],
    ["Planning", planningImg]
  ]);
  const company = new Map([
    ["History", null],
    ["Our Team", null],
    ["Blog", null]
  ]);
  return (
    <div className={"navigation-container " + hideSidebar}>
      <nav className="navigation">
        <img className='close-sidebar' onClick={() => {setHideSidebar('')}} src={exitSidebar} alt="exit sidebar" />
        <ul className="nav-item-container">
          <Dropdown title="Features" items={features}/>
          <Dropdown title="Company" items={company}/>
          <li>
            <div>
              <p className='nav-title'>Careers</p>
            </div>
          </li>
          <li>
            <div>
              <p className='nav-title'>About</p>
            </div>
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
