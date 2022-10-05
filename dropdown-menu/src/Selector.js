const Selector = (props) => {
  const selectAll = () => {
    props.setSelected(props.items);
  };

  const selectNone = () => {
    props.setSelected([]);
  };

  const toggleSelect = (item) => {
    if (props.selected.includes(item)) {
      props.setSelected(props.selected.filter((i) => i !== item));
    } else {
      props.setSelected([...props.selected, item]);
    }
  };
  return (
    <div>
      <div>
        <div
          style={{ fontStyle: "italic" }}
          className="item background"
          onClick={() => selectNone()}
        >
          none
        </div>
        <div
          style={{ fontStyle: "italic" }}
          className="item background"
          onClick={() => selectAll()}
        >
          select all
        </div>
        {props.items.map((item) => (
          <div
            className={
              props.selected.includes(item)
                ? "item highlighted"
                : "item background"
            }
            onClick={() => toggleSelect(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selector;
