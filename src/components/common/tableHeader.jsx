import React from "react";

class TableHeader extends React.Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  sortColumnIcon = (colums) => {
    const { sortColumn } = this.props;
    if (colums.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.colums.map((colums) => (
            <th className="clickable"
              key={colums.path || colums.key}
              onClick={() => this.raiseSort(colums.path)}
            >
              {colums.label} {this.sortColumnIcon(colums)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
