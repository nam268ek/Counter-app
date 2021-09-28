import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "./listGroup";
import Counters from "./counters";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import _ from "lodash";
import Search from "./common/search";

class Movies extends React.Component {
  state = {
    counters: [],
    genre: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
    selectGenre: { _id: "", name: "All Genres" },
  };

  deleteMovies = (id) => {
    const counters = this.state.counters.filter((m) => m._id !== id);
    this.setState({ counters });
  };

  handleIncrease = (movie) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(movie);
    counters[index] = { ...movie };
    counters[index].dailyRentalRate++;
    this.setState({ counters });
  };

  handleDecrease = (movie) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(movie);
    counters[index] = { ...movie };
    counters[index].dailyRentalRate--;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = getMovies();
    this.setState({ counters });
  };

  handLike = (movie) => {
    let counters = [...this.state.counters];
    let index = counters.indexOf(movie);
    counters[index] = { ...movie };
    counters[index].like = counters[index].like === true ? false : true;
    this.setState({ counters });
  };

  handleOnPageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectGenre: genre, currentPage: 1 });
  };

  componentDidMount = () => {
    const genre = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ counters: getMovies(), genre });
  };
  handleSorted = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleChangeSearch = ({ currentTarget: input }) => {
    const movies = getMovies().filter(
      (m) => m.title.toLowerCase().search(input.value.toLowerCase()) !== -1
    );
    this.setState({
      counters: movies,
      currentPage: 1,
      selectGenre: { _id: "", name: "All Genres" },
    });
  };

  render() {
    const { counters, pageSize, currentPage, genre, selectGenre, sortColumn } =
      this.state;
    const filtered =
      selectGenre && selectGenre._id
        ? counters.filter((m) => m.genre._id === selectGenre._id)
        : counters;
    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    return (
      <div>
        <br />
        <div className="row">
          <div className="col-sm-2">
            <ListGroup
              onGenre={genre}
              selectedItem={selectGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>
          <div className="col-sm-8">
            <Link to="movies/new" className="btn btn-primary">
              New Movies
            </Link>
            <Search onChange={this.handleChangeSearch} />
            <Counters
              onMovies={sorted}
              onDelete={this.deleteMovies}
              onIncrease={this.handleIncrease}
              onDecrease={this.handleDecrease}
              onLike={this.handLike}
              onPageSize={pageSize}
              onPageChange={this.handleOnPageChange}
              onCurrentPage={currentPage}
              onSort={this.handleSorted}
              sortColumn={sortColumn}
              onChange={this.handleChangeSearch}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movies;
