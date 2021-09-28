import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { getGenres } from "./../services/fakeGenreService";
import { getMovie, saveMovie } from "./../services/fakeMovieService";

class NewMovies extends Form {
  state = {
    data: {
      title: "",
      genreId: "",
      numberInStock: "",
      dailyRentalRate: "",
    },
    genres: [],
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().required(),
    genreId: Joi.string().required(),
    numberInStock: Joi.number().required(),
    dailyRentalRate: Joi.number().required(),
  };

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };

  componentDidMount() {
    this.setState({ genres: getGenres() });

    const moviesId = this.props.match.params.id;
    if (moviesId === "new") return;

    const movie = getMovie(moviesId);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapToViewModel(movie) });
  }
  mapToViewModel = (movie) => {
    return {
      _id: movie._id,
      title: movie.title,
      genreId: movie.genre._id,
      numberInStock: movie.numberInStock,
      dailyRentalRate: movie.dailyRentalRate,
    };
  };

  render() {
    return (
      <div>
        <br />
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title", "text")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "NumberInStock", "number")}
          {this.renderInput("dailyRentalRate", "DailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovies;
