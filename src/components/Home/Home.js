import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <body>
      <div class="KW_progressContainer">
        <div class="KW_progressBar"></div>
      </div>
      <div className="page">
        <Navbar home={true} about={false} />
        <div className="colorlib-page">
          <Header />
          <section class="home-slider owl-carousel js-fullheight">
            <div class="slider-item js-fullheight">
              <div class="overlay"></div>
              <div class="container">
                <div
                  class="row slider-text align-items-center text-center justify-content-center"
                  data-scrollax-parent="true"
                >
                  <div
                    class="col-md-12 ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <p>
                      <a href="#" class="scroll">
                        Hello! I'm
                      </a>
                    </p>
                    <h1
                      class="mb-3"
                      data-scrollax="properties: { translateY: '30%', opacity: 1.6 }"
                    >
                      Vedant Pruthi
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div class="slider-item js-fullheight">
              <div class="overlay"></div>
              <div class="container">
                <div
                  class="row slider-text align-items-center text-center justify-content-center"
                  data-scrollax-parent="true"
                >
                  <div
                    class="col-md-12 ftco-animate"
                    data-scrollax=" properties: { translateY: '70%' }"
                  >
                    <p>
                      <a href="#" class="scroll">
                        I'm a passionate
                      </a>
                    </p>
                    <h1
                      class="mb-3"
                      data-scrollax="properties: {translateY: '30%', opacity: 1.6}"
                    >
                      Full Stack Developer
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="ftco-section about-section">
            <div class="container">
              <div class="row d-flex" data-scrollax-parent="true">
                <div
                  class="col-md-4 author-img"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/nQRLjyq/SAVE-20190901-220903.jpg)",
                  }}
                  data-scrollax=" properties: { translateY: '-70%'}"
                ></div>
                <div class="col-md-2"></div>
                <div class="col-md-6 wrap ftco-animate">
                  <div class="about-desc">
                    <h1 class="bold-text">About</h1>
                    <div class="p-5">
                      <h2 class="mb-5">Hi! I'm Vedant Pruthi</h2>
                      <p>
                        A passionate Full Stack Developer with 3 years of
                        Experience. Coding since the age of playing Cricket in
                        the Streets.
                      </p>
                      <p>
                        <a href="https://drive.google.com/file/d/1Qjhur70EEr-JestBsAx5rt7mflvl3dF5/view?usp=sharing">
                          Checkout my resume
                        </a>
                      </p>
                      <ul class="ftco-footer-social list-unstyled mt-4">
                        <li>
                          <a
                            target="_blank"
                            href="https://github.com/vedant1723"
                          >
                            <span class="icon-github"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.facebook.com/vedant.pr"
                          >
                            <span class="icon-facebook"></span>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            href="https://www.instagram.com/vedantpruthi/"
                          >
                            <span class="icon-instagram"></span>
                          </a>
                        </li>
                      </ul>
                      <h5>Contact me here!</h5>
                      <p>
                        Email:{" "}
                        <a href="mailto:vedant.pruthi1723@gmail.com">
                          <span class="__cf_email__">
                            vedant.pruthi1723@gmail.com
                          </span>
                        </a>
                      </p>
                      <p>
                        Phone: <a href="tel:+919588858821">+91-9588858821</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center mb-5 pb-5">
                <div class="col-md-7 text-center heading-section ftco-animate">
                  <span>What i do</span>
                  <h2>My services</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services p-3 py-4 d-block text-center">
                    <div class="icon mb-3">
                      <span class="icon-layers"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading">Application Development</h3>
                      <h3 class="heading">React Native</h3>
                      <h3 class="heading">Flutter & Dart</h3>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services p-3 py-4 d-block text-center">
                    <div class="icon mb-3">
                      <span class="icon-gears"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading">Backend Development</h3>
                      <h3 class="heading">Node-JS</h3>
                      <h3 class="heading">Express-JS</h3>
                    </div>
                  </div>
                </div>
                <div class="col-md-4 d-flex align-self-stretch ftco-animate">
                  <div class="media block-6 services p-3 py-4 d-block text-center">
                    <div class="icon mb-3">
                      <span class="icon-code"></span>
                    </div>
                    <div class="media-body">
                      <h3 class="heading">Web Applications</h3>
                      <h3 class="heading">React-JS</h3>
                      <h3 class="heading">Redux</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section class="ftco-section">
            <div class="container">
              <div class="row justify-content-center mb-5 pb-5">
                <div class="col-md-7 text-center heading-section ftco-animate">
                  <span>Portfolio</span>
                  <h2>Checkout a few of my works</h2>
                </div>
              </div>
              <div class="row no-gutters">
                <div
                  class="block-3 d-md-flex ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a
                    class="image d-flex justify-content-center align-items-center"
                    data-scrollax=" properties: { translateY: '-30%'}"
                  >
                    <div class="icon d-flex text-center justify-content-center align-items-center"></div>
                  </a>
                  <div class="text">
                    <h4 class="subheading">Web App & Android App</h4>
                    <h2 class="heading">
                      <a>A Full Fledge Ecommerce Application</a>
                    </h2>
                    <p>
                      Ecommerce Web Application on MERN Stack and Android Native
                      for Android App. APIs are developed on Node and Express JS
                      and MongoDB as a Database.
                    </p>
                    <p>
                      <a href="#">View Project</a>
                    </p>
                  </div>
                </div>
                <div
                  class="block-3 d-md-flex ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a
                    class="image order-2 d-flex justify-content-center align-items-center"
                    data-scrollax=" properties: { translateY: '-30%'}"
                  >
                    <div class="icon d-flex text-center justify-content-center align-items-center"></div>
                  </a>
                  <div class="text order-1">
                    <h4 class="subheading">Application</h4>
                    <h2 class="heading">
                      <a href="portfoli-singleo.html">
                        Image to Text Recognition App
                      </a>
                    </h2>
                    <p>
                      An Android Native app which helps us to Fetch Texts from
                      Image using Firebase ML Kit
                    </p>
                    <p>
                      <a href="#">View Project</a>
                    </p>
                  </div>
                </div>
                <div
                  class="block-3 d-md-flex ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a
                    class="image d-flex justify-content-center align-items-center"
                    data-scrollax=" properties: { translateY: '-30%'}"
                  >
                    <div class="icon d-flex text-center justify-content-center align-items-center"></div>
                  </a>
                  <div class="text">
                    <h4 class="subheading">Web Application</h4>
                    <h2 class="heading">
                      <a>A Full Fledge Job Web App</a>
                    </h2>
                    <p>
                      A Full Fledge Job Web App on MERN Stack with Admin Panel
                      with Redux State Management with some Cool Features like
                      Video Resume, Resume Builder etc
                    </p>
                    <p>
                      <a href="#">View Project</a>
                    </p>
                  </div>
                </div>
                <div
                  class="block-3 d-md-flex ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a class="image order-2 d-flex justify-content-center align-items-center">
                    <div class="icon d-flex text-center justify-content-center align-items-center"></div>
                  </a>
                  <div class="text order-1">
                    <h4 class="subheading">Web Application</h4>
                    <h2 class="heading">
                      <a href="portfoli-singleo.html">Devzone</a>
                    </h2>
                    <p>
                      A Mini Social Media Web App specially for Developers on
                      MERN Stack with Redux State Management
                    </p>
                    <p>
                      <a href="#">View Project</a>
                    </p>
                  </div>
                </div>
                <div
                  class="block-3 d-md-flex ftco-animate"
                  data-scrollax-parent="true"
                >
                  <a class="image d-flex justify-content-center align-items-center">
                    <div class="icon d-flex text-center justify-content-center align-items-center"></div>
                  </a>
                  <div class="text">
                    <h4 class="subheading">Web Application</h4>
                    <h2 class="heading">
                      <a href="portfoli-singleo.html">Placement Assistor</a>
                    </h2>
                    <p>
                      A Full Fledge Placement Assistor Framework is developed
                      just to Help the universities to handle Placements and its
                      data.
                    </p>
                    <p>
                      <a href="#">View Project</a>
                    </p>
                  </div>
                </div>
              </div>
              and much more on...
              <a href="https://github.com/vedant1723">Github</a>
            </div>
          </section>
          <section class="ftco-section ftco-counter" id="section-counter">
            <div class="container">
              <div class="row justify-content-center mb-5 pb-5">
                <div class="col-md-7 text-center heading-section ftco-animate">
                  <span>Portfolio</span>
                  <h2>I love to share my achievements</h2>
                </div>
              </div>
              <div class="row d-flex justify-content-start">
                <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div class="block-18">
                    <div class="text">
                      <span class="ftco-label">Project Done</span>
                      <strong class="number" data-number="437">
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-center">
                <div class="col-md-5 col-sm-5 counter-wrap ftco-animate">
                  <div class="block-18">
                    <div class="text"></div>
                  </div>
                </div>
              </div>
              <div class="row d-flex justify-content-end">
                <div class="col-md-5 counter-wrap ftco-animate">
                  <div class="block-18">
                    <div class="text">
                      <span class="ftco-label">Cups of coffee</span>
                      <strong class="number" data-number="1000">
                        0
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Home;
