import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

interface DropdownProps {
  title: string,
  items: {[key: string]: string}
}

const Dropdown = ({title, items}:DropdownProps) => {
  return (
    <li>
      <p>{title}</p>
      <img className="dropdown-toggle" src={arrowDown} alt="arrowDown" />
    </li>
  )
}

export default Dropdown
