import React from "react";
import "./navbar.styles.css";

function NavbarComponent() {
  return (
    <nav>
      <div id="left">
        <img alt="logo" src="./logo.svg" width="75" height="75" />

        <div className="d-flex flex-column">
          <h4>Google Developer Students Club</h4>
          <h6>MVJ College of Engineering</h6>
        </div>
      </div>

      <div id="right">
        <img
          alt="user-avatar"
          src="./profile-image.jpeg"
          width="30"
          height="30"
        />

        <p>Shebin Joseph</p>
      </div>
    </nav>
  );
}

export default NavbarComponent;
