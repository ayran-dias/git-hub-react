import React from "react";

function Profile({ user }) {
  return (
<div class="container-lg">
<div class="card-body">
    <div className="row">
      <div className="col-md-4">
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={user.avatar_url} alt={user.avatar_url}/>

          <ul className="list-group list-group-flush">
            <l1 className="list-group-item">
              Repositórios:
              <span className="Text-Table"> {user.public_repos}</span>
            </l1>
            <l1 className="list-group-item">
              Seguidores:
              <span className="Text-Table">  {user.followers}</span>
            </l1>
            <l1 className="list-group-item">
              Seguindo:
              <span className="Text-Table">  {user.following}</span>
            </l1>
          </ul>
          <div className="card body">
            <a href={user.html_url} className="btn btn-primary btn-lg">
              Ver Perfil
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  );  
};

export default Profile;
