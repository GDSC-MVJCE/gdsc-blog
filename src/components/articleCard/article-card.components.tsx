import "./article-card.styles.scss";
import MentorPic from "../../images/mentor-pic.png";
import { useNavigate } from "react-router-dom";

function ArticleCard({ id }: { id: number }) {
  const navigate = useNavigate();

  return (
    <div className="article-card">
      <div className="article-card-header"></div>
      <div className="article-card-body">
        <h5>Intro to Data Science</h5>
        <p>Gives you a glimpse about how to get started in data science</p>

        <div className="mentor">
          <img src={MentorPic} alt="Mentor Avatar" />
          <p>Shebin Joseph</p>
        </div>

        <button onClick={() => navigate("/blog/" + id)} className="blue-bg-btn">
          Read Now
        </button>
      </div>
    </div>
  );
}

export default ArticleCard;
