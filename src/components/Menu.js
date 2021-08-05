import React from 'react';
import {Link, NavLink} from 'react-router-dom';

function Menu() {
    return(
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    {/* <span className="navbar-toggler-icon "></span> */}
<section class="mb-3">
  <nav class="navbar navbar-info bg-info">
    <div class="container-fluid">
      <button class="navbar-toggler third-button" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarToggleExternalContent11"
        aria-controls="navbarToggleExternalContent11" aria-expanded="false"
        aria-label="Toggle navigation">
        <div class="animated-icon3"><span></span><span></span><span></span></div>
      </button>
    </div>
  </nav>
  <div class="collapse" id="navbarToggleExternalContent11">
    <div class="bg-light shadow-3 p-4">
      <button class="btn btn-link btn-block border-bottom m-0">Link 1</button>
      <button class="btn btn-link btn-block border-bottom m-0">Link 2</button>
      <button class="btn btn-link btn-block m-0">Link 3</button>
    </div>
  </div>
</section>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <span>&nbsp;</span>
    <a className="navbar-brand" href="/">Mon Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon">
        
      </span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink  exact className="nav-link "  to="/home">Accueil</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">A Propos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/photo">Mes Photos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/event">Mes Evenements</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Menu;