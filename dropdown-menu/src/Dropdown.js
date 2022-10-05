import React, { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import Selector from "./Selector";
import SingleSelector from "./SingleSelector";
import "./Dropdown.scss";

const Dropdown = (props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <div className="dropdown">
      <div
        onClick={() => setOpen(!open)}
        className={open ? "label label--open" : "label"}
        title={selected.join(", ")}
      >
        <span className="icon-wrapper">
          <FaAngleUp className={open ? "icon open" : "icon"} />
        </span>
        <div className="label--text">
          {selected.map((i, indx) =>
            indx !== selected.length - 1 ? (
              <div className="text">{i}, </div>
            ) : (
              <div className="text">{i}</div>
            )
          )}
        </div>
      </div>
      <div className={open ? "ModalOpen menu" : "ModalClosed menu"}>
        {props.allowMultiple ? (
          <Selector
            items={props.items}
            setSelected={setSelected}
            selected={selected}
          ></Selector>
        ) : (
          <SingleSelector
            items={props.items}
            setSelected={setSelected}
            selected={selected}
          ></SingleSelector>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
