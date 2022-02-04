import React from "react";
import "./details.styles.css";
import logo from "./pictures/Group 35.png";
import ai from "./pictures/Artifical inteligence_Outline 1.png";
import backArrow from "./pictures/Frame.png";
import mentorPhoto1 from "./pictures/Ellipse 1.png";
import heart from "./pictures/Vector (1).png";
import mentorPhoto2 from "./pictures/Ellipse 8.png";
import instagram from "./pictures/instagram 1.png";
import web from "./pictures/image 3.png";




var likes = 33
var mentorName = "Shebin Joseph"
var mDes1 = "Description about the mentor. This is a small introduction of myself."
var mDes2 = "This is the second line where I am wondering what should I add about myself"


function DetailsPage() {
  return (
    <div className="mainDiv">
      <div className="rectangle1">
      </div>
        <div className="logo">
            <img src={logo} alt="logo"/>
        </div>
        <div className="header">

          </div>
        <div className="ai-image">
               <img src={ai} alt="ai-image"/>
                </div>
        <div className="rectangle2">
        </div>
        <div className="backArrow">
            <img src={backArrow} alt="arrow"/>
        </div>
         <div className="author">
                                <p>{mentorName}</p>
         </div>
        <div className="mentor-photo">
            <img src={mentorPhoto1} alt="profile"/>
        </div>
            <div className="like-block">
            <div className="like-background">
                <div className="likes">
                <img src={heart}/>
            </div>
                <div className="likes-count">
                    {likes}
                </div>
            </div>
            </div>





        <div className="blog-heading">
                            Intro to Data Science
                        </div>


                    <div className="blog-content">
                        <p>Data science is the practice of mining large data sets of raw data, both structured and unstructured, to identify patterns and extract actionable insight from them. This is an interdisciplinary field, and the foundations of data science include statistics, inference, computer science, predictive analytics, machine learning algorithm development, and new technologies to gain insights from big data.</p>
                        <br/>

<p>To define data science and improve data science project management, start with its life cycle. The first stage in the data science pipeline workflow involves capture: acquiring data, sometimes extracting it, and entering it into the system. The next stage is maintenance, which includes data warehousing, data cleansing, data processing, data staging, and data architecture.</p>
                            <br/>

<p>Data processing follows, and constitutes one of the data science fundamentals. It is during data exploration and processing that data scientists stand apart from data engineers. This stage involves data mining, data classification and clustering, data modeling, and summarizing insights gleaned from the data</p>
                    </div>


        <div className="rectangle3">

        </div>
        <div className="mentor-photo2">
            <img src={mentorPhoto2}/>
        </div>
        <div className="author-name2">
            <h3>{mentorName}</h3>
        </div>
        <div className="description">
            <p>{mDes1}</p>
            <p>{mDes2}</p>
        </div>
        <div className="instagram">
            <img src={instagram}/>
        </div>
        <div className="web">
            <img src={web}/>
        </div>

      </div>
  );
}

export default DetailsPage;
