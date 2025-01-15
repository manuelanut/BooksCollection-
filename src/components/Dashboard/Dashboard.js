import React from "react";
import Slider from "react-slick";
import evelynHugo from "../../assets/evelyn-hugo.jpg";
import orasulOaselor from "../../assets/orasul-oaselor.jpg";
import belladonna from "../../assets/belladonna.jpg";
import primejdia from "../../assets/Primejdia-pluteste -in-aer2.jpg";
import primejdiac from "../../assets/lightasafeather.jpg";
import crimap from "../../assets/cperfecta.jpg";
import crimaps from "../../assets/crimaperfecta.jpg";
import shadowhunters from "../../assets/shadowhunters.jpg";
import "./Dashboard.css";

function Dashboard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="dashboard">
      <div className="dashboard-top">
        <div className="dashboard-left">
          <div className="recommendations">
            <h3 className="title">Recomandări și filme</h3>
            <Slider {...settings} >
              <div className="recommendation-item">
                <img src={shadowhunters} alt="Shadowhunters" className="recommendation-image" />
                <p class="recommendation-text">Shadowhunters: The Mortal Instruments</p>
              </div>
              <div className="recommendation-item">
                <img src={primejdiac} alt="Primejdia pluteste in aer" className="recommendation-image" />
                <p class="recommendation-text">Usor ca o pana</p>
              </div>
              <div className="recommendation-item">
                <img src={crimaps} alt="Crima perfecta" className="recommendation-image" />
                <p class="recommendation-text">Crima perfecta: Instructiuni pentru fete cumintii</p>
              </div>
            </Slider>
          </div>
        </div>

        <div className="dashboard-right">
          <div className="carousel-section">
            <h2 className="title">Noutăți</h2>
            <Slider {...settings} >
              <div className="image-wrapper">
                <img src={belladonna} alt="Belladonna" className="dashboard-image" />
              </div>
              <div className="image-wrapper">
                <img src={evelynHugo} alt="Evelyn Hugo" className="dashboard-image" />
              </div>
              <div className="image-wrapper">
                <img src={orasulOaselor} alt="Orasul Oaselor" className="dashboard-image" />
              </div>
              <div className="image-wrapper">
                <img src={crimap} alt="Crima perfecta" className="dashboard-image" />
              </div>
              <div className="image-wrapper">
                <img src={primejdia} alt="Primejdia pluteste in aer" className="dashboard-image" />
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="dashboard-reviews">
        <div className="reviews-container">
          <div className="reviews">
            <h3 className="title">Recenzii</h3>
            <blockquote>"O carte fantastică!" - Alex</blockquote>
            <blockquote>"Mi-a plăcut foarte mult." - Maria</blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
