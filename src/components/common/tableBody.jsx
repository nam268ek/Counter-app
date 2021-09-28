import React, { Component } from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (movies, colums) => {
    if (colums.content) return colums.content(movies);
    if (colums.path === "title")
      return (
        <Link to={`/movies/${movies._id}`} style={{ textDecoration: "none" }}>
          {movies.title}
        </Link>
      );
    return _.get(movies, colums.path);
  };
  createKey = (movies, colums) => {
    return movies[this.props.valueProperty] + (colums.path || colums.key);
  };
  render() {
    const { data, colums, valueProperty } = this.props;
    return (
      <tbody>
        {data.map((movies) => (
          <tr key={movies[valueProperty]}>
            {colums.map((colums) => (
              <td key={this.createKey(movies, colums)}>
                {this.renderCell(movies, colums)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
TableBody.defaultProps = {
  valueProperty: "_id",
};
export default TableBody;
