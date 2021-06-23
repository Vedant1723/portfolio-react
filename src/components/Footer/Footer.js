import React from "react";

const Footer = () => {
  return (
    <footer class="ftco-footer ftco-bg-dark ftco-section">
      <div class="container">
        <div class="row mb-5 justify-content-center">
          <div class="col-md-5 text-center">
            <div class="ftco-footer-widget mb-5">
              <ul class="ftco-footer-social list-unstyled">
                <li class="ftco-animate">
                  <a target="_blank" href="https://github.com/vedant1723">
                    <span class="icon-github"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a target="_blank" href="https://www.facebook.com/vedant.pr">
                    <span class="icon-facebook"></span>
                  </a>
                </li>
                <li class="ftco-animate">
                  <a
                    target="_blank"
                    href="https://www.instagram.com/vedantpruthi/"
                  >
                    <span class="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
            <div class="ftco-footer-widget">
              <h2 class="mb-3">Contact Us</h2>
              <p class="h3 email">
                <a href="mailto:vedant.pruthi1723@gmail.com">
                  <span class="__cf_email__">vedant.pruthi1723@gmail.com</span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i
                class="icon-heart"
                aria-hidden="true"
                style={{ color: "red" }}
              ></i>{" "}
              by{" "}
              <a href="https://colorlib.com/" target="_blank">
                Vedant Pruthi
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
