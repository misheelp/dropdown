const SingleSelector = (props) => {
  const toggleSelected = (item) => {
    if (props.selected.includes(item)) {
      props.setSelected([]);
    } else {
      props.setSelected([item]);
    }
  };

  const selectNone = () => {
    props.setSelected([]);
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
        {props.items.map((item) => (
          <div
            className={
              props.selected.includes(item)
                ? "item highlighted"
                : "item background"
            }
            onClick={() => toggleSelected(item)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSelector;
