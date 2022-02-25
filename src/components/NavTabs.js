import React from "react";
import "./assets/css/navtabs.css";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills justify-content-end">
      <li className="nav-item">
        <a
          href="#about"
          id="navigation"
          onClick={() => handlePageChange("About")}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "About" ? "nav-link active bg-dark" : "nav-link"
          } 
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          id="navigation"
          onClick={() => handlePageChange("Portfolio")}
          // This is a conditional (ternary) operator that checks to see if the current page is "Portfolio"
          // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
          className={
            currentPage === "Portfolio"
              ? "nav-link active bg-dark"
              : "nav-link"
          }
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#resume"
          id="navigation"
          onClick={() => handlePageChange("Resume")}
          // Check to see if the currentPage is `Resume`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Resume"
              ? "nav-link active bg-dark"
              : "nav-link"
          }
        >
          Resume
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          id="navigation"
          onClick={() => handlePageChange("Contact")}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={
            currentPage === "Contact"
              ? "nav-link active bg-dark"
              : "nav-link"
          }
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
