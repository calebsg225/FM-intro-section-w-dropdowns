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
    <li>
      <div onClick={() => setIsDropped(!isDropped)}>
        <p className="nav-title">{title}</p>
        {isDropped ? <ArrowUp /> : <ArrowDown /> }
      </div>
      <ul className={"dropdown-container" + (!isDropped ? " dropdown-hidden" : '')}>
        {Array.from(items).map(([item, image]) => (
          <li>
            {image && (<img src={image} alt={item}/>)}
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown
