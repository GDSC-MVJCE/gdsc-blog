import { useNavigate, useParams } from "react-router-dom";

import { blogs } from "../../utils/blogs";
import NavbarComponent from "../../components/navbar/navbar.components";

import ai from "../../images/ai-img.png";
import heart from "../../images/like.png";
import WebImg from "../../images/web.png";
import InstaImg from "../../images/insta.png";
import backArrow from "../../images/back-arrow.png";
import mentorPhoto1 from "../../images/mentor-pic.png";

import "./details.styles.scss";

function DetailsPage() {
  const { id } = useParams();
  const blog = blogs[Number.parseInt(id as string)];
  console.log(blog);
  const navigate = useNavigate();

  return (
    <main id="details-page">
      <NavbarComponent />

      <div className="ai-image">
        <img src={ai} alt="Artificial Intelligence" />
      </div>

      <div className="blog">
        <div className="blog-heading">
          <div className="blog-heading-content">
            <div className="blog-heading-content-row">
              <img
                className="back-arrow"
                onClick={() => navigate("/")}
                src={backArrow}
                alt="arrow"
              />
              <h2 className="blog-title">{blog.title}</h2>
            </div>

            <div className="blog-heading-content-row">
              <img
                className="blog-mentor-pic"
                src={mentorPhoto1}
                alt="profile"
              />

              <p>{blog.author}</p>
            </div>
          </div>

          <div className="like-block">
            <img src={heart} alt="Like" />
            <h5 className="likes-count">{blog.likes}</h5>
          </div>
        </div>

        <div className="blog-content">
          {blog.description.map((para, idx) => (
            <h6 key={idx}>{para}</h6>
          ))}
        </div>
      </div>

      <footer>
        <img alt="Mentor" src="/profile-image.jpeg" />

        <div className="footer-content">
          <h5 className="title">{blog.author}</h5>

          {blog.author_description.map((para, idx) => (
            <p key={idx}>{para}</p>
          ))}

          <div className="footer-socials">
            <img
              src={InstaImg}
              onClick={() => navigate(blog.author_socials[0])}
              alt="Instagram"
            />
            <img
              src={WebImg}
              onClick={() => navigate(blog.author_socials[1])}
              alt="Website"
            />
          </div>
        </div>
      </footer>
    </main>
  );
}

export default DetailsPage;
