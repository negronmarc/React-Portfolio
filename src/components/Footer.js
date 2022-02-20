import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/css/footer.css";

function Footer() {
  return (
    <div id="footer">
      <a href="https://github.com/negronmarc">
        <i class="bi bi-github icons"></i>
      </a>

      <a href="https://www.linkedin.com/in/marc-negron-6b48b0226/">
        <i class="bi bi-linkedin icons"></i>
      </a>

      <a href="mailto:negronmarc@gmail.com">
        <i class="bi bi-envelope icons"></i>
      </a>
    </div>
  );
}

export default Footer;
