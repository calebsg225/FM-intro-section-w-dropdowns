import { useState } from "react";
import { ReactComponent as ArrowDown } from "../images/icon-arrow-down.svg";
import { ReactComponent as ArrowUp } from "../images/icon-arrow-up.svg";

interface DropdownProps {
  title: string,
  items: Map<string, string | null>
}

const Dropdown = ({title, items}:DropdownProps) => {
  const [ isDropped, setIsDropped ] = useState(false);

  return (
    <li onClick={() => setIsDropped(!isDropped)}>
      <p className="nav-title">{title}</p>
      {isDropped ? <ArrowUp /> : <ArrowDown /> }
      <ul className="dropdown-container">
        {Array.from(items).map(([item, image]) => (
          <li className="dropdown-item">
            {image && (<img src={image} alt={item}/>)}
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown
