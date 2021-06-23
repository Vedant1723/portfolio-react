import React from "react";

const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="colorlib-navbar-brand">
              <a class="colorlib-logo" href="/">
                <span
                  class="logo-img"
                  style={{
                    backgroundImage:
                      "url(https://i.ibb.co/nQRLjyq/SAVE-20190901-220903.jpg)",
                  }}
                ></span>
                Vedant Pruthi
              </a>
            </div>
            <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle">
              <i></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
