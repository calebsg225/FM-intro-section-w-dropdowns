import Navigation from "./Navigation";

import hamburger from '../images/icon-menu.svg';
import { useState } from "react";

const Header = () => {
  const [hideSidebar, setHideSidebar] = useState('');
  return (
    <header>
      <h2>snap</h2>
      <Navigation
        hideSidebar={hideSidebar}
        setHideSidebar={setHideSidebar}/>
      <img className="open-sidebar" onClick={() => setHideSidebar('show-sidebar')} src={hamburger} alt="hamburger"/>
    </header>
  )
}

export default Header