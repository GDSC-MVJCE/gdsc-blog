import { Link } from "react-router-dom";

import NavbarComponent from "../../components/navbar/navbar.components";
import { ReactComponent as HeroImg } from "../../images/hero-img.svg";
import { ReactComponent as RocketSVG } from "../../images/rocket.svg";

import "./dashboard.styles.scss";

function DashboardPage() {
  return (
    <>
      <NavbarComponent />

      <div id="Dashboard-Page">
        <main id="hero-section">
          <div id="hero-section-content">
            <div id="hero-title">
              <h1>Holla,</h1>
              <h4>Give your valuable feedback</h4>
            </div>

            <button id="hero-btn" className="blue-bg-btn">
              Feedback Form
            </button>

            <div id="hero-body">
              <h4>Why follow us ?</h4>

              <div id="hero-body-rockets-container">
                <div className="hero-body-rocket">
                  <RocketSVG />
                  <Link to="/">Skyrocket your knowledge</Link>
                </div>

                <div className="hero-body-rocket">
                  <RocketSVG />
                  <Link to="/">Skyrocket your knowledge</Link>
                </div>

                <div className="hero-body-rocket">
                  <RocketSVG />
                  <Link to="/">Skyrocket your knowledge</Link>
                </div>
              </div>
            </div>
          </div>

          <HeroImg id="hero-section-img" />
        </main>

        {/* <div id="align">
          <h2>Article</h2>

          <div>
            <button type="button" className="btn btn-light" id="button">
              <img src="dsFrame.svg" width="30" alt="" /> Data Science
            </button>
            <button type="button" className="btn btn-light" id="button">
              <img src="frontendFrame.svg" width="30" alt="filter-option" />
              Data Science
            </button>
          </div>

          <div id="padding">
            <div
              className="d-flex flex-column card justify-content-between"
              id="card-item"
            >
              <img className="card-img-top" src="card-image.svg" alt="card" />
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">
                  Gives you a glimpse of how to get started in Data Science
                </p>
                <p className="card-text">
                  <small className="text-muted">Shebin Joseph</small>
                </p>

                <button className="blue-bg-btn">Read More</button>
              </div>
            </div>

            <div
              className="d-flex flex-column card justify-content-between"
              id="card-item"
            >
              <img className="card-img-top" src="card-image.svg" alt="" />
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">
                  Gives you a glimpse of how to get started in Data Science
                </p>
                <p className="card-text">
                  <small className="text-muted">Shebin Joseph</small>
                </p>

                <button className="blue-bg-btn">Read More</button>
              </div>
            </div>

            <div
              className="d-flex flex-column card jusitfy-content-between"
              id="card-item"
            >
              <img className="card-img-top" src="card-image.svg" alt="" />
              <div className="card-body">
                <h3 className="card-title">Intro to Data Science</h3>
                <p className="card-text">
                  Gives you a glimpse of how to get started in Data Science
                </p>
                <p className="card-text">
                  <small className="text-muted">Shebin Joseph</small>
                </p>
                <button className="blue-bg-btn">Read More</button>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default DashboardPage;
