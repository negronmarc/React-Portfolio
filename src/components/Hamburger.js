import React from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

function Hamburger({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="bi bi-list text-white"></i>
          </button>
        </div>
      </nav>
      <div class="collapse" id="navbarToggleExternalContent">
        <div class="bg-light shadow-3 p-4">
          <button class="btn btn-link btn-block border-bottom m-0">
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              className={
                currentPage === "About"
                  ? "nav-link active bg-dark"
                  : "nav-link text-white"
              }
            >
              About Me
            </a>
          </button>
          <button class="btn btn-link btn-block border-bottom m-0">
            <a
              href="#portfolio"
              onClick={() => handlePageChange("Portfolio")}
              className={
                currentPage === "Portfolio"
                  ? "nav-link active bg-dark"
                  : "nav-link text-white"
              }
            >
              Portfolio
            </a>
          </button>
          <button class="btn btn-link btn-block border-bottom m-0">
            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume"
                  ? "nav-link active bg-dark"
                  : "nav-link text-white"
              }
            >
              Resume
            </a>
          </button>
          <button class="btn btn-link btn-block m-0">
            {" "}
            <a
              href="#contact"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact"
                  ? "nav-link active bg-dark"
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
