import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

class Pagination extends React.Component {
  render() {
    const { itemsCount, onPageSize, onPageChange, onCurrentPage } = this.props;
    const pageCount = Math.ceil(itemsCount / onPageSize);
    const pages = _.range(1, pageCount + 1);
    if (pageCount === 1) return null;
    return (
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === onCurrentPage ? "page-item active" : "page-item"
              }
            >
              <button className="page-link" onClick={() => onPageChange(page)}>
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  onPageSize: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onCurrentPage: PropTypes.number.isRequired,
};

export default Pagination;
