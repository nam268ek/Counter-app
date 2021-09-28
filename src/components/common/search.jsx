import React from "react";

class Search extends React.Component {
  render() {
    const { onChange } = this.props;
    return (
      <div className="row">
          <div className="input-group my-3">
            <input
              onChange={onChange}
              type="text"
              className="form-control"
              placeholder="Search..."
            />
          </div>
      </div>
    );
  }
}

export default Search;
