import React, { Component } from "react";
import Like from "./common/like";
import Pagination from "./common/pagination";
import { paginate } from "../untils/paginate";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";

class Counter extends Component {
  colums = [
    { path: "title", label: "Title" },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "delete",
      content: (movies) => (
        <button
          className="btn btn-danger"
          onClick={() => this.props.onDelete(movies._id)}
        >
          Delete
        </button>
      ),
    },
    {
      key: "icon",
      content: (movies) => (
        <Like onClick={() => this.props.onLike(movies)} movies={movies} />
      ),
    },
    {
      key: "increase",
      content: (movies) => (
        <button
          className="btn btn-secondary"
          style={{ width: 70 }}
          onClick={() => this.props.onIncrease(movies)}
        >
          +
        </button>
      ),
    },
    {
      key: "decrease",
      content: (movies) => (
        <button
          className="btn btn-secondary"
          style={{ width: 70 }}
          onClick={() => this.props.onDecrease(movies)}
          disabled={movies.dailyRentalRate <= 0.5 ? "disabled" : ""}
        >
          -
        </button>
      ),
    },
  ];
  render() {
    const {
      onMovies: allMovies,
      onPageChange,
      onPageSize,
      onCurrentPage,
      sortColumn,
      onSort,
    } = this.props;

    const { length: count } = allMovies;
    const onMovies = paginate(allMovies, onCurrentPage, onPageSize);
    if (count === 0) return "Nothing";

    return (
      <React.Fragment>
        <p>Showing {count} movies in the database.</p>
        
        <table className="table table-striped">
          <TableHeader
            colums={this.colums}
            sortColumn={sortColumn}
            onSort={onSort}
          />
          <TableBody data={onMovies} colums={this.colums} />
        </table>
        <Pagination
          itemsCount={count}
          onPageSize={onPageSize}
          onPageChange={onPageChange}
          onCurrentPage={onCurrentPage}
        />
      </React.Fragment>
    );
  }
}

export default Counter;
