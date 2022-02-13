import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classNameName="App">
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#page-top">
          <span className="d-block d-lg-none">Kevin Aboy</span>
          <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="assets/images/profile.jpg" alt="Kevin Aboy smiling" /></span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span
            className="navbar-toggler-icon"></span></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav">
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#portfolio">Portfolio</a></li>
            {/* <!-- <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
            <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li> --> */}
          </ul>
        </div>
      </nav>
      {/* <!-- Page Content--> */}
      <div className="container-fluid p-0">
        {/* <!-- About--> */}
        <section className="resume-section" id="about">
          <div className="resume-section-content">
            <h1 className="mb-0">
              Kevin
              <span className="text-primary">Aboy</span>
            </h1>
            <div className="subheading mb-5">
              <a href="mailto:kaboy@icloud.com">kaboy@icloud.com</a>
            </div>
            <p className="lead mb-5">I am a Front-End Developer at Apple and student at the University of Texas at Austin. I
              obtained the
              Gold-Seal Certificate for completing the Project Management Certificate Program. In September 2021, I
              began UT Austin's Coding Boot Camp to broaden my skillset and learn Full Stack Web Development. </p>
            <div className="social-icons">
              <a className="social-icon" href="https://www.linkedin.com/in/kevinaboy"><i className="fab fa-linkedin-in"></i></a>
              <a className="social-icon" href="https://github.com/kevinaboy"><i className="fab fa-github"></i></a>
              {/* <!-- <a className="social-icon" href="#!"><i className="fab fa-twitter"></i></a>
              <a className="social-icon" href="#!"><i className="fab fa-facebook-f"></i></a> --> */}
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Experience--> */}
        <section className="resume-section" id="experience">
          <div className="resume-section-content">
            <h2 className="mb-5">Experience</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Front-End Developer</h3>
                <div className="subheading mb-3">Apple</div>
                <p>Develops and maintains rich user experiences for internal websites serving Apple Recruiters.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">November 2021 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Business Impact and Communications Lead</h3>
                <div className="subheading mb-3">AsianPacific@Apple</div>
                <p>Maintains internal website, develops comms, and leads events for Apple's Diversity Network Association,
                  AsianPacific@Apple.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">November 2020 - Present</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">Creative Media Senior Advisor</h3>
                <div className="subheading mb-3">AppleCare</div>
                <p>Provided technical supports to customers using Apple-developed consumer and professional applications
                  such as Photos, iMovie, and Final Cut Pro. Leadership Academy Graduate and
                  AppleCare Mentor.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">August 2017 - October 2021</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0">Content Specialist Rotation</h3>
                <div className="subheading mb-3">AppleCare</div>
                <p>Wrote standard operating procedures used by AppleCare Advisors worldwide. Used HTML and WYSIWYG editor to
                  make internal websites and emails.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2008 - June 2010</span></div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Education--> */}
        <section className="resume-section" id="education">
          <div className="resume-section-content">
            <h2 className="mb-5">Education</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <h3 className="mb-0">University of Texas at Austin</h3>
                <div className="subheading mb-3">Coding Boot Camp Certificate Program</div>
                <div>Roles: Project Lead, Designer, Developer</div>
                <p>HTML, CSS, JavaScript, jQuery, Express.js, React.js, Node.js, MongoDB, MySQL, Command Line, Git, and
                  GitHub.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">September 2021 - March 2022</span></div>
            </div>
            <div className="d-flex flex-column flex-md-row justify-content-between">
              <div className="flex-grow-1">
                <h3 className="mb-0"></h3>
                <div className="subheading mb-3">Project Management Certificate Program</div>
                <div>Role: Senior Project Manager</div>
                <p>Led a team of project managers in the completion of a 140+ page real estate project plan. Applied project
                  management principles, theories, and practices, including the basic concepts described in <em>A Guide to
                    the Project Management Body of Knowledge</em> (PMBOK® Guide) - Sixth Edition.</p>
              </div>
              <div className="flex-shrink-0"><span className="text-primary">May 2019 - August 2019</span></div>
            </div>
          </div>

        </section>
        <hr className="m-0" />
        {/* <!-- Skills--> */}
        <section className="resume-section" id="skills">
          <div className="resume-section-content">
            <h2 className="mb-5">Skills</h2>
            <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
              <div className="flex-grow-1">
                <div className="subheading mb-3">Programming Languages & Tools</div>
                <ul className="list-inline dev-icons">
                  <li className="list-inline-item"><i className="fab fa-html5"></i></li>
                  <li className="list-inline-item"><i className="fab fa-css3-alt"></i></li>
                  <li className="list-inline-item"><i className="fab fa-js-square"></i></li>
                  {/* <!-- <li className="list-inline-item"><i className="fab fa-angular"></i></li> --> */}
                  <li className="list-inline-item"><i className="fab fa-node-js"></i></li>
                  <li className="list-inline-item"><i className="fab fa-react"></i></li>
                </ul>
                {/* <!-- <h3 className="mb-0">University of Texas at Austin</h3> --> */}
                <div className="subheading mb-3">Certificates and Apps</div>
                <div>Final Cut Pro and iWork</div>
                <p>Box, Sketch, Slack, Quip, Wrike</p>
                {/* <!-- <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Mobile-First, Responsive Design
                </li>
                <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Cross Browser Testing & Debugging
                </li>
                <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Cross Functional Teams
                </li>
                <li>
                  <span className="fa-li"><i className="fas fa-check"></i></span>
                  Agile Development & Scrum
                </li>
              </ul> --> */}
              </div>
            </div>
          </div>
        </section>
        <hr className="m-0" />
        {/* <!-- Portfolio --> */}
        <section className="resume-section" id="portfolio">
          <div className="resume-section-content">
            <h2 className="mb-5">Portfolio</h2>
            {/* <!-- <p>Coming soon...</p> --> */}
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="assets/images/want-to-buy-hp.png" alt="Want To Buy Homepage Screenshot" />
                    <div className="card-body">
                      <h5 className="card-title">Want To Buy</h5>
                      {/* <!-- <h6 className="card-subtitle mb-2 text-muted">HTML, CSS, JAVASCRIPT, MAPBOX API</h6> --> */}
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
                  <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="assets/images/tacoshop_hp_med.png"
                      alt="Top 3 Taco Shops Homepage Screenshot" />
                    <div className="card-body">
                      <h5 className="card-title">Top 3 Taco Shops</h5>
                      {/* <!-- <h6 className="card-subtitle mb-2 text-muted">HTML, CSS, JAVASCRIPT, MAPBOX API</h6> --> */}
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
                <div className="col-sm-12 col-md-4">
                  <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="assets/images/horiseon_hp_med.png" alt="Card image cap" />
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
              </div>
            </div>
          </div>
        </section >

        <section className="resume-section" id="portfolio">
          <div className="resume-section-content">
            {/* <!-- <h2 className="mb-5">Portfolio</h2> -->
            <!-- <p>Coming soon...</p> --> */}
            <div className="container">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <div className="card" style="width: 18rem;">
                    <img className="card-img-top" src="assets/images/run_buddy.jpg" alt="Card image cap" />
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
        </section >
        {/* <!-- Bootstrap core JS--> */}
        < script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" ></script >
        {/* <!-- Core theme JS--> */}
        < script src="js/script.js" ></script >
      </div >
    </div>
  );
}

export default App;