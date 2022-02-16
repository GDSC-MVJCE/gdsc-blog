import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import ProfilePic from "../../images/profile-image.jpeg";
import "./navbar.styles.scss";

function NavbarComponent() {
  return (
    <nav>
      <div id="left">
        <LogoSVG id="logo" />

        <div>
          <h4>Google Developer Students Club</h4>
          <h6>MVJ College of Engineering</h6>
        </div>
      </div>

      <div id="right">
        <img alt="user-avatar" src={ProfilePic} width="30" height="30" />

        <p>Shebin Joseph</p>
      </div>
    </nav>
  );
}

export default NavbarComponent;
