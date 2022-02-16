import InstaImg from "../../images/insta.png";
import WebImg from "../../images/web.png";
import "./footer.styles.css";

function Footer() {
  return (
    <footer>
      <img alt="Mentor" src="/profile-image.jpeg" />

      <div className="footer-content">
        <h5 className="title">Shebin Joseph</h5>

        <p>
          Description about the mentor. This is a samll introduction of myself.
        </p>
        <p>
          This is the second line where I am wondering what should I add about
          myself
        </p>

        <div className="footer-socials">
          <img src={InstaImg} alt="Instagram" />
          <img src={WebImg} alt="Website" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
