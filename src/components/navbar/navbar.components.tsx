import { useContext } from "react";
import { ReactComponent as LogoSVG } from "../../images/logo.svg";
import ProfilePic from "../../images/profile-image.jpeg";
import { UsersContext } from "../../utils/usersContext";
import "./navbar.styles.scss";

function NavbarComponent() {
  const { user, SignOut, SigninWithGoogle } = useContext(UsersContext);

  return (
    <nav>
      <div id="left">
        <LogoSVG id="logo" />
        <p>GDSC MVJCE</p>
      </div>

      <div id="right">
        {user ? (
          <button onClick={async () => await SignOut()}>
            <img
              alt="user-avatar"
              src={user.photoURL ?? ProfilePic}
              width="30"
              height="30"
            />

            <p>{user.displayName}</p>
          </button>
        ) : (
          <button onClick={async () => await SigninWithGoogle()}>Login</button>
        )}
      </div>
    </nav>
  );
}

export default NavbarComponent;
