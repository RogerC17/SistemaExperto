import React from 'react';
import './styles.css';

function AsMetodo() {
    return (
      <section className="vh-100 gradient-custom">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Menu</a>
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                <a className="nav-link" href="#">Perfil</a>
                <a className="nav-link" href="#">Opciones</a>
              </div>
            </div>
          </div>
        </nav>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">¿QUE METODO DE APRENDIZAJE PREFIERES?</h2>
                    <div className="d-flex flex-column">
                      <button className="btn btn-outline-light btn-lg px-5 mb-2" type="submit">LECTURAS</button>
                      <button className="btn btn-outline-light btn-lg px-5" type="submit">VIDEOS</button>
                    </div>
                    <p className="text-white-50 mb-5">ELIGE UN TEMA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  

export default AsMetodo;
