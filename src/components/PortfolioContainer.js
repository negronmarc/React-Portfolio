import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Hamburger from "./Hamburger";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Footer from "./Footer";
import "./assets/css/container.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("About");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div
      style={{
        backgroundColor: "#8ea8c3",
        width: "100%",
        height: "100%",
      }}
    >
      {/* We are passing the currentPage from state and the function to update it */}
      <div id="header">
        <h1>Marc Negron</h1>
        <div id="nav">
          <NavTabs
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
        <div id="hamburger">
          <Hamburger
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      <Footer />
    </div>
  );
}
