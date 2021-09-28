import React from "react";
import Counter from "./counter";
class Counters extends React.Component {
  render() {
    const {
      onMovies,
      onDelete,
      onIncrease,
      onDecrease,
      onLike,
      onPageChange,
      onPageSize,
      onCurrentPage,
      onSort,
      sortColumn,
    } = this.props;

    return (
      <React.Fragment>
        <Counter
          onMovies={onMovies}
          onDelete={onDelete}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          onLike={onLike}
          onPageSize={onPageSize}
          onPageChange={onPageChange}
          onCurrentPage={onCurrentPage}
          onSort={onSort}
          sortColumn={sortColumn}
        />
      </React.Fragment>
    );
  }
}

export default Counters;
