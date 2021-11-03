import React, { Component } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import Profile from "./Profile";
import Repo from "./Repo";

class App extends Component {
  constructor() {
    super();
    this.state = {
      github: {
        url: "https://api.github.com/users",
        client_id: "6100ace24a7bdf3cc92c",
        client_secret: "640df702c483ff909f832b9d2a3a6eafb1104fb2",
        count: 7,
        sort: "created asc",
      },
      user: [],
      repos: [],
    };
  }

  getUser = (e) => {
    const user = e.target.value;

    const { url, client_id, client_secret, count, sort } = this.state.github;
    axios
      .get(
        `${url}/${user}?client_id=${client_id}&client_secret=${client_secret}`


   
      )
      .then(({ data }) => this.setState({ user: data }));

    axios
      .get(
        `${url}/${user}/repos?per_page=${count}&sort=${sort}?
    client_id=${client_id}&client_secret=${client_secret}`
      )
      .then(({ data }) => this.setState({ repos: data }));
  };


  renderProfile = () => {
    const { user, repos } = this.state;

    return (
      <div className="container-fluid">
      <div className=" row">
        <div className="col-md-4">
          <h4 className="text-center">Profile</h4>
          <Profile user={user} />
        </div>
        <div className="col-md-4">
        <div class="card-body">

          {repos.map(repo => <Repo key= {repo.name} repo={repo} />)}
        </div>
        </div>
      </div>
      </div>
    );
  };

  
  render() {
    return (
      <div className="App">
        <NavBar></NavBar>

        <div className="container">
          <div className="card card-body">
            <h1> Pesquisar Usuários do GitHub</h1>

            <p className="Lead">
              Digite um nome para encontrar usuários e repositórios
            </p>


            <input
              onChange={this.getUser}
              id="search"
              type="text"
              className="form-control"
              placeholder="Pesquisar por ..."
              required
            />
          </div>

          {this.state.user.length !== 0 ? this.renderProfile() : 
          <div className="alert alert-danger"> Digite um usuário válido</div>}


        </div>
      </div>
    );
  }
}

export default App;
