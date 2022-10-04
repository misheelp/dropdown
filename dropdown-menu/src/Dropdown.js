import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Selector from "./Selector";
import SingleSelector from "./SingleSelector";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState([]);

  return (
    <div className="dropdown">
      <div className="label">
        <FaAngleDown onClick={() => setOpen(!open)} />
        <div>
          {selected.map((i) => (
            <div>{i}</div>
          ))}
        </div>
      </div>
      {open &&
        (props.allowMultiple ? (
          <Selector></Selector>
        ) : (
          <SingleSelector
            items={props.items}
            setSelected={setSelected}
            selected={selected}
          ></SingleSelector>
        ))}
    </div>
  );
};

export default Dropdown;
