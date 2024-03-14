import React from "react";
import "./Navbar.css";
import { useNavigate, Link } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <Link to="/" className="navbar-brand">
          <p>Skinny Tours</p>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li
              class="nav-item"
              onClick={() => {
                navigate("/");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Home
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/about");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Gallery
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/services");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Reviews
              </a>
            </li>
            <li
              class="nav-item"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                id="navLinks"
              >
                Contact
              </a>
            </li>
            
          </ul>
          <div id="navBtn">
            <div id="navIcons">
                <a href="" target="_blank">
                  <i class="bx bxl-facebook"></i>
                </a>
            </div>
            <Link to={'https://wa.me/+27630668806'}>
              <button type="submit">WhatsApp</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
