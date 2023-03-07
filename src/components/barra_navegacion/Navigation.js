import React, { Component } from "react";
import { Link } from "react-router-dom";
import '../style/navegacion_style.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark justify-content-center">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img src="https://i.ibb.co/NYSzVtS/logo.png" className="d-inline-block align-middle" alt="Logo Marca" />
            DHD Catálogo
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link active text-center" aria-current="page" to='/ropa'>👕 Ropa</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-center" aria-current="page" to='/electronicos'>🎛️ Electronicos</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active text-center" aria-current="page" to='/otros'>📦 Otros</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
