import hamburger from '../images/icon-menu.svg';

interface NavbarProps {
  features: {[key: string]: string},
  company: string[],
  setHideSidebar: Function
}

const Navbar = ({features, company, setHideSidebar}:NavbarProps) => {
  return (
    <div className="navbar-container">
      <div className="navbar"></div>
      <img onClick={() => setHideSidebar('')} src={hamburger} alt="hamburger"/>
    </div>
  )
}

export default Navbar
