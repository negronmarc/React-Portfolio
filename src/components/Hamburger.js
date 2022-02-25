import React from "react";
import Bootstrap from "bootstrap";
import "./assets/css/hamburger.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Hamburger({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar col-right">
        <div class="container-fluid">
          <button
            class="navbar-toggler ms-auto btn-outline-light justify-content-between "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
          >
            <i class="bi bi-list" id="lines"></i>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="">
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#about"
              id="navigation-burger"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              About Me
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#portfolio"
              id="navigation-burger"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Portfolio
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#resume"
              id="navigation-burger"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Resume
            </a>
          </button>
          <button class="btn btn-link btn-block m-0 text-decoration-none">
            {" "}
            <a
              href="#contact"
              id="navigation-burger"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active bg-dark"
                  : "nav-link"
              }
            >
              Contact
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
