import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTumblr,
  faTwitter,
  faYoutube,
  faKickstarter,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "../../src/navbar.css";
import logo from "../img/starwarslogo.png";

const Navbar = () => {
  return (
    <div className="container-fluid sticky-top">
      <div className="row ">
        <nav className="col-12 navbar navbar-expand-lg d-flex p-1 mx-0 ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="/navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="social-icons col-4 align-self-start">
              <ul className="navbar-nav mr-auto mt-0">
                <li className="nav-item">
                  <a
                    className="nav-link icons"
                    href="https://www.facebook.com/StarWars"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Facebook"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li className="nav-item ">
                  <a
                    className="nav-link icons"
                    href="https://www.instagram.com/starwars/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icons"
                    href="https://starwars.tumblr.com/"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Tumblr"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTumblr} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icons"
                    href="https://twitter.com/starwars"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Twitter"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link icons"
                    href="https://www.youtube.com/user/starwars"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Youtube"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
                <li className="nav-item ml-4">
                  <a
                    className="nav-link icons icon-kids"
                    href="https://lol.disney.com/star-wars"
                    target="_blank"
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Star Wars Kids"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faKickstarter} />
                  </a>
                </li>
              </ul>
            </div>
            <div className="logo col-4 text-center">
              <Link className="navbar-brand" to="/vehicles">
                <img className="logoimage" src={logo} alt="logoimage" />
              </Link>
            </div>
            <div className="search col-4 mt-0 ">
              <div className="d-flex flex-row-reverse">
                <form className="form-inline-block">
                  <input
                    className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Star Wars"
                    aria-label="Search"
                  />
                  <span className="user-options d-flex justify-content-end">
                    <Link className="log-in user" to="/">
                      LOG IN
                    </Link>
                    <h6 className="mx-2">-</h6>
                    <Link className="sign-up user" to="/">
                      SIGN UP
                    </Link>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div className="row">
        <ul className="col-12 nav items-starwars justify-content-center">
          <li className="nav-item vehicles">
            <Link className="nav-link text-white-50" to="/vehicles">
              VEHICLES
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white-50" to="/planets">
              PLANETS
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white-50" to="/character">
              CHARACTER
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white-50" to="/favorites">
              FAVORITES
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
