import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Nav.module.css";
import SearchBar from "./SearchBar";

function Nav() {
  return (
    <div className={Styles.nav_container}>
      <Link to="/home">
        <div className="nav_text">
          <p>Country-Henry-App</p>
        </div>
      </Link>

      <div className="links_nav">
        <ul>
          <Link to="/about">
            <li>
              <span>About Me</span>
            </li>
          </Link>
          <Link to="/post">
            <li>
              <span>Create your activity</span>
            </li>
          </Link>
        </ul>
      </div>

      <div>
        <SearchBar />
      </div>
    </div>
  );
}

export default Nav;
