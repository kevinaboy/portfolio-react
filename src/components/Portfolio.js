import React from 'react';

import marvelousHomepageImg from '../assets/img/marvelous-homepage.png';
import tacoShopImg from '../assets/img/tacoshop_hp_med.png';
import wantToBuyImg from '../assets/img/want-to-buy-hp.png';
import runBuddyImg from '../assets/img/run_buddy.jpg';
import horiseonImg from '../assets/img/horiseon_hp_med.png';



function Portfolio(props) {
  return (
    <>
      <section className="resume-section" id="portfolio">
        <div className="resume-section-content">
          <h2 className="mb-5">Portfolio</h2>
          {/*
      <!-- <p>Coming soon...</p> --> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img className="card-img-top" src={marvelousHomepageImg} alt="Marvelous Home Page" />
                  <div className="card-body">
                    <h5 className="card-title">Marvelous</h5>
                    {/*
                <!-- <h6 className="card-subtitle mb-2 text-muted">HTML, CSS, JAVASCRIPT, MAPBOX API</h6> --> */}
                    <p className="card-text">Marvelous is a web application that let's you search through various Marvel superheroes and villains. For example, type "spider-man" and receive 13 results to view from the Marvel Comics API! We also built a forum specifically for users to be able to comment and share their interest in the Marvel Universe.
                    </p>
                    <a href="https://marvelous-mern.herokuapp.com/" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/taylorkeltgen/marvelous" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img className="card-img-top" src={wantToBuyImg} alt="Want To Buy Homepage Screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Want To Buy</h5>
                    {/*
                <!-- <h6 className="card-subtitle mb-2 text-muted">HTML, CSS, JAVASCRIPT, MAPBOX API</h6> --> */}
                    <p className="card-text">A twist to the typical e-commerce website, this web app uses Node.js and
                      Express.js to
                      create a RESTful API, Handlebars.js as the templating engine, MySQL and Sequelize ORM for the
                      database, Amazon Web Services S3 for storing images, and deployed using Heroku.
                    </p>
                    <a href="https://want-to-buy.herokuapp.com/" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/taylorkeltgen/want-to-buy/" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img className="card-img-top" src={tacoShopImg} alt="Top 3 Taco Shops Homepage Screenshot" />
                  <div className="card-body">
                    <h5 className="card-title">Top 3 Taco Shops</h5>
                    {/*
                <!-- <h6 className="card-subtitle mb-2 text-muted">HTML, CSS, JAVASCRIPT, MAPBOX API</h6> --> */}
                    <p className="card-text">Any day is a good day for a taco. This highly collaborative project utilizes
                      JavaScript, Mapbox GL JS, OpenWeather One Call API, and Materialize, a modern responsive CSS
                      framework based on Material Design by Google.
                    </p>
                    <a href="https://trujilml.github.io/top-3-taco-shops" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/trujilml/top-3-taco-shops" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="resume-section" id="portfolio">
        <div className="resume-section-content">
          {/*
      <!-- <h2 className="mb-5">Portfolio</h2> -->
      <!-- <p>Coming soon...</p> --> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="card">
                  <img className="card-img-top" src={horiseonImg} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Code Refactor</h5>
                    <p className="card-text">Reworked the CSS to make it more efficient by consolidating CSS selectors and
                      properties, organizing them to follow the semantic structure of the HTML elements, and including
                      comments before each element or section of the page.</p>
                    <a href="https://kevinaboy.github.io/code-refactor/" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/kevinaboy/code-refactor" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4">
                <div className="card" >
                  <img className="card-img-top" src={runBuddyImg} alt="Run Buddy Home Page" />
                  <div className="card-body">
                    <h5 className="card-title">Run Buddy</h5>
                    <p className="card-text">Created a landing page for Run Buddy, a service that lets runners sign up for
                      personal training using HTML5 and CSS3. Managed code using a popular version control system called
                      Git. The websites on this page were deployed using GitHub Pages.</p>
                    <a href="https://kevinaboy.github.io/run-buddy/" className="card-link">View website</a>
                    <br />
                    <a href="https://github.com/kevinaboy/run-buddy" className="card-link">View repo</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;