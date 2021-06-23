import React from "react";

const Navbar = (props) => {
  return (
    <nav id="colorlib-main-nav" role="navigation">
      <a href="/" class="js-colorlib-nav-toggle colorlib-nav-toggle active">
        <i></i>
      </a>
      <div class="js-fullheight colorlib-table">
        <div
          class="img"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/nQRLjyq/SAVE-20190901-220903.jpg)",
          }}
        ></div>
        <div class="colorlib-table-cell js-fullheight">
          <div class="row no-gutters">
            <div class="col-md-12 text-center">
              <h1 class="mb-4">
                <a href="index-2.html" class="logo">
                  Vedant Pruthi
                </a>
              </h1>
              <ul>
                <li className={props.home ? "active" : ""}>
                  <a href="/">
                    <span>
                      <small>01</small>Home
                    </span>
                  </a>
                </li>
                <li class={props.about ? "active" : ""}>
                  <a href="/about">
                    <span>
                      <small>02</small>Resume
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
