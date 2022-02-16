import React from "react";
import NavbarComponent from "../../components/navbar/navbar.components";
import ai from "../../images/ai-img.png";
import backArrow from "../../images/back-arrow.png";
import mentorPhoto1 from "../../images/mentor-pic.png";
import heart from "../../images/like.png";
import Footer from "../../components/footer/footer.components";
import "./details.styles.css";

var likes = 33;
var mentorName = "Shebin Joseph";

function DetailsPage() {
  return (
    <main>
      <NavbarComponent />

      <div className="ai-image">
        <img src={ai} alt="Artificial Intelligence" />
      </div>

      <div className="blog">
        <div className="blog-heading">
          <div className="blog-heading-content">
            <div className="blog-heading-content-row">
              <img className="back-arrow" src={backArrow} alt="arrow" />
              <h2 className="blog-title">Intro to Data Science</h2>
            </div>

            <div className="blog-heading-content-row">
              <img
                className="blog-mentor-pic"
                src={mentorPhoto1}
                alt="profile"
              />
              <p>{mentorName}</p>
            </div>
          </div>

          <div className="like-block">
            <img src={heart} alt="Like" />
            <h5 className="likes-count">{likes}</h5>
          </div>
        </div>

        <div className="blog-content">
          <p>
            Data science is the practice of mining large data sets of raw data,
            both structured and unstructured, to identify patterns and extract
            actionable insight from them. This is an interdisciplinary field,
            and the foundations of data science include statistics, inference,
            computer science, predictive analytics, machine learning algorithm
            development, and new technologies to gain insights from big data.
          </p>

          <p>
            To define data science and improve data science project management,
            start with its life cycle. The first stage in the data science
            pipeline workflow involves capture: acquiring data, sometimes
            extracting it, and entering it into the system. The next stage is
            maintenance, which includes data warehousing, data cleansing, data
            processing, data staging, and data architecture.
          </p>

          <p>
            Data processing follows, and constitutes one of the data science
            fundamentals. It is during data exploration and processing that data
            scientists stand apart from data engineers. This stage involves data
            mining, data classification and clustering, data modeling, and
            summarizing insights gleaned from the data
          </p>
        </div>
      </div>

      <Footer />
    </main>
  );
}

export default DetailsPage;
