import React from "react";
import Bootstrap from "bootstrap";
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
            <i class="bi bi-list"></i>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="">
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active bg-dark text-white"
                  : "nav-link text-white"
              }
            >
              About Me
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-dark text-white"
                  : "nav-link text-white"
              }
            >
              Portfolio
            </a>
          </button>
          <button class="btn btn-link m-0 text-decoration-none">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active bg-dark text-white"
                  : "nav-link text-white"
              }
            >
              Resume
            </a>
          </button>
          <button class="btn btn-link btn-block m-0 text-decoration-none">
            {" "}
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active bg-dark text-white"
                  : "nav-link text-white"
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
