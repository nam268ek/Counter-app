import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navbar";
import Movies from "./components/movies";
import NotFound from "./components/notFound";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import NewMovies from "./components/newMovies";
import axios from "axios";
import config from "./config.json";
import "./App.css";

class App extends Component {
  // state = {
  //   posts: [],
  // };

  // componentDidMount = async () => {
  //   const { data: posts } = await axios.get(config.apiEndPoint);
  //   this.setState({ posts });
  // };

  // handleAdd = async () => {
  //   const obj = { title: "a", body: "asd" };
  //   const { data } = await axios.post(config.apiEndPoint, obj);
  //   this.setState({ posts: [data, ...this.state.posts] });
  //   console.log("Add");
  // };

  // handleUpdate = async (post) => {
  //   post.title = "UPDATE";
  //   await axios.put(config.apiEndPoint + "/" + post.id, post);
  //   const posts = [...this.state.posts];
  //   const index = posts.indexOf(post);
  //   posts[index] = post;
  //   this.setState({ posts });
  //   console.log("Update", post);
  // };

  // handleDelete = async (post) => {
  //   await axios.delete(config.apiEndPoint + "/" + post.id);
  //   const posts = [...this.state.posts];
  //   const index = posts.indexOf(post);
  //   posts.splice(index, 1);
  //   this.setState({ posts });
  // };

  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={LoginForm} />
            <Route path="/movies/:id" component={NewMovies} />
            <Route path="/movies" component={Movies} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect to="not-found" />
          </Switch>
        </main>

        {/* <button className="btn btn-primary" onClick={this.handleAdd}>
          Add
        </button>
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((post) => (
              <tr key={post.id}>
                <td>{post.title}</td>
                <td>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => this.handleUpdate(post)}
                  >
                    Update
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(post)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}
      </React.Fragment>
    );
  }
}

export default App;
