import exitSidebar from '../images/icon-close-menu.svg';

interface SidebarProps {
  features: {[key: string]: string},
  company: string[],
  hideSidebar: string,
  setHideSidebar: Function
}

const Sidebar = ({features, company, hideSidebar, setHideSidebar}:SidebarProps) => {
  return (
    <div className={"sidebar-container " + hideSidebar}>
      <div className="sidebar">
        <img onClick={() => {setHideSidebar('')}} src={exitSidebar} alt="exit sidebar" />
      </div>
    </div>
  )
}

export default Sidebar
