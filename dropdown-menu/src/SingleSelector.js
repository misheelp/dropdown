const SingleSelector = (props) => {
  return (
    <div className="menu">
      <div>
        {props.items.map((item) => (
          <div
            className={props.selected.includes(item) ? "highlighted" : ""}
            onClick={() => props.setSelected([item])}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleSelector;
