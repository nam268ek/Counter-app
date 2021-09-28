import React from "react";

class ListGroup extends React.Component {
  render() {
    const { onGenre, selectedItem, onItemSelect, textProperty, valueProperty } =
      this.props;
    return (
      <ul className="list-group">
        {onGenre.map((item) => {

          return (
            <li
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
              className={
                item[valueProperty] === selectedItem[valueProperty] 
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item[textProperty]}
            </li>
          );
        })}
      </ul>
    );
  }
}
ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id",
};
export default ListGroup;
