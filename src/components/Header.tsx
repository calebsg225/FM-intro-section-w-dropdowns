import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import todoImg from '../images/icon-todo.svg';
import calenderImg from '../images/icon-calendar.svg';
import reminderImg from '../images/icon-reminders.svg';
import planningImg from '../images/icon-planning.svg';
import { useState } from "react";

const Header = () => {
  const features = {
    "Todo List": todoImg,
    "Calender": calenderImg,
    "Reminders": reminderImg,
    "Planning": planningImg
  };
  const company = ["History", "Our Team", "Blog"];

  const [hideSidebar, setHideSidebar] = useState('hide-sidebar');
  return (
    <header>
      <h2>snap</h2>
      <Navbar features={features} company={company} setHideSidebar={setHideSidebar}/>
      <Sidebar
        features={features}
        company={company}
        hideSidebar={hideSidebar}
        setHideSidebar={setHideSidebar}/>
    </header>
  )
}

export default Header
