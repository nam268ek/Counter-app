import React from "react";

class Like extends React.Component {
  render() {
    const { movies, onClick } = this.props;
    let classes = movies.like === true ? "fa fa-heart" : "fa fa-heart-o";
    return (
      <i
        onClick={onClick}
        className={classes}
        style={{ cursor: "pointer" }}
      ></i>
    );
  }
}

export default Like;
