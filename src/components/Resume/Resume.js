import React from "react";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";

const Resume = () => {
  return (
    <body>
      <div class="KW_progressContainer">
        <div class="KW_progressBar"></div>
      </div>
      <div className="page">
        <Navbar home={false} about={true} />
        <div className="colorlib-page">
          <Header />
          <section class="ftco-section about-section">
            <div class="container">
              <div class="row d-flex my-5" data-scrollax-parent="true">
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
              <div class="row d-flex justify-content-end mt-5">
                <div class="col-md-10">
                  <div class="profile ftco-animate">
                    <h2 class="mb-4">Profile</h2>
                    <h4 class="mb-4">
                      I'm a Full Stack Developer from Rajasthan, India. I aim to
                      make a difference through my creative solution.
                    </h4>
                    <p>
                      A passionate Full Stack Developer with 3 years of
                      Experience. Coding since the age of playing Cricket in the
                      Streets.
                    </p>
                    <div class="row my-5">
                      <div class="col-md-6">
                        <p>
                          <strong>Name:</strong> <span>Vedant Pruthi</span>
                        </p>
                        <p>
                          <strong>Address:</strong>{" "}
                          <span>
                            110 G Block, Sriganganagar, Rajsthan 335001
                          </span>
                        </p>
                        <p>
                          <strong>Phone:</strong> <span>+91-9588858821</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="exp mt-5 ftco-animate">
                    <h2 class="mb-4">Experience</h2>
                    <div class="exp-wrap py-4">
                      <div class="desc">
                        <h4>
                          Full Stack Developer{" "}
                          <span> - Saaspect &amp; Too Decimal Pvt LTD.</span>{" "}
                        </h4>
                        <p class="location">Haryana - India</p>
                      </div>
                      <div class="year">
                        <p>2020 - 2021</p>
                      </div>
                    </div>
                    <div class="exp-wrap py-4">
                      <div class="desc">
                        <h4>
                          Freelance <span> - Freelance</span>{" "}
                        </h4>
                        <p class="location">Local and Abroad</p>
                      </div>
                      <div class="year">
                        <p>2018 - Present</p>
                      </div>
                    </div>
                  </div>
                  <div class="exp mt-5 ftco-animate">
                    <h2 class="mb-4">Education</h2>
                    <div class="exp-wrap py-4">
                      <div class="desc">
                        <h4>
                          Master Degree in Computer Applications
                          <span> - Chitkara University</span>{" "}
                        </h4>
                        <p class="location">Chandigarh - India</p>
                      </div>
                      <div class="year">
                        <p>2020 - 2022</p>
                      </div>
                    </div>
                    <div class="exp-wrap py-4">
                      <div class="desc">
                        <h4>
                          Bachelor Degree in Computer Applications
                          <span> - Harvard University</span>{" "}
                        </h4>
                        <p class="location">Chandigarh - India</p>
                      </div>
                      <div class="year">
                        <p>2017 - 2020</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row mt-5 flex-column ftco-animate">
                <div class="col-md-8">
                  <h2 class="mb-4">My Skills</h2>
                </div>
                <div class="col-md-6 animate-box">
                  <div class="progress-wrap">
                    <h4>Node-JS & Express-JS</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>React & Redux</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box">
                  <div class="progress-wrap">
                    <h4>React Native</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>Flutter & Dart</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="85"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "85%" }}
                      >
                        <span>85%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 animate-box">
                  <div class="progress-wrap">
                    <h4>MongoDB & PostgreSQL</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="95"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "95%" }}
                      >
                        <span>95%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>Python</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>C/C++ and Java</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "80%" }}
                      >
                        <span>80%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>Git</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-md-6 animate-box"
                  data-animate-effect="fadeInRight"
                >
                  <div class="progress-wrap">
                    <h4>Firebase & AWS</h4>
                    <div class="progress">
                      <div
                        class="progress-bar color-1"
                        role="progressbar"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: "90%" }}
                      >
                        <span>90%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </body>
  );
};

export default Resume;
