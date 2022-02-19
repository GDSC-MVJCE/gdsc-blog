import "./article-card.styles.scss";
import MentorPic from "../../images/mentor-pic.png";

function ArticleCard() {
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

        <button className="blue-bg-btn">Read Now</button>
      </div>
    </div>
  );
}

export default ArticleCard;
