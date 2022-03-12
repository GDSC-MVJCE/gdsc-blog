import { Link } from "react-router-dom";
import ArticleCard from "../../components/articleCard/article-card.components";

import { ReactComponent as HeroImg } from "../../images/hero-img.svg";
import { ReactComponent as RocketSVG } from "../../images/rocket.svg";
import NavbarComponent from "../../components/navbar/navbar.components";

import "./dashboard.styles.scss";

function DashboardPage() {
  return (
    <>
      <NavbarComponent />

      <div id="dashboard-page">
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

        <section id="dashboard-content">
          <h4>Article</h4>

          <div id="dashboard-content-articles">
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </div>
        </section>
      </div>
    </>
  );
}

export default DashboardPage;
