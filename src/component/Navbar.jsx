import React from "react";
// import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../Css/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm py-2 py-lg-0 px-3 px-lg-0">
        <Link href="/" className="navbar-brand ms-lg-5">
          <h1 className="m-0 text-uppercase text-primary">
            <i class="fi fi-bs-store-alt fs-1  me-1"></i> Pet Shop
          </h1>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0 ">
            <Link to="/" className="nav-item nav-link active">
              Home
            </Link>
            <Link to="/aboutUs" className="nav-item nav-link">
              About
            </Link>
            <Link href="service.html" className="nav-item nav-link">
              Service
            </Link>
            <Link to="/product" className="nav-item nav-link">
              Product
            </Link>
            <Link to="/product" className="nav-item nav-link me-5 ">
              <FontAwesomeIcon icon={faCartShopping} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Start */}
      <div class="container-fluid bg-primary py-5 mb-5 hero-header">
        <div class="container py-5">
          <div class="row justify-content-start">
            <div class="col-lg-8 text-center text-lg-start">
              <h1 class="display-1 text-uppercase text-dark mb-lg-4">
                Pet Shop
              </h1>
              <h1 class="text-uppercase text-white mb-lg-4">
                Make Your Pets Happy
              </h1>
              <p class="fs-4 text-white mb-lg-4">
                Dolore tempor clita lorem rebum kasd eirmod dolore diam eos
                kasd. Kasd clita ea justo est sed kasd erat clita sea
              </p>
              <div class="d-flex align-items-center justify-content-center justify-content-lg-start pt-5">
                <a
                  href=""
                  class="btn btn-outline-light border-2 py-md-3 px-md-5 me-5"
                >
                  Shop Now!!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Service start */}
      <div class="container-fluid py-5">
        <div class="container">
          <div
            class="border-start border-5 border-primary ps-5 mb-5"
            style={{ maxwidth: "600px" }}
          >
            <h6 class="text-primary text-uppercase">Services</h6>
            <h1 class="display-5 text-uppercase mb-0">
              Our Excellent Pet Care Services
            </h1>
          </div>
          <div class="row g-5">
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-br-house-chimney-heart display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Boarding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More{" "}
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-sr-truck-utensils display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Feeding</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-ss-shower display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Grooming</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-tr-cat display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Training</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-rr-dog display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Exercise</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="service-item bg-light d-flex p-4">
                <i class="fi fi-ts-hand-holding-medical display-1 text-primary me-4"></i>
                <div>
                  <h5 class="text-uppercase mb-3">Pet Treatment</h5>
                  <p>
                    Kasd dolor no lorem sit tempor at justo rebum rebum stet
                    justo elitr dolor amet sit
                  </p>
                  <a class="text-primary text-uppercase" href="">
                    Read More
                    <i>
                      <FontAwesomeIcon icon={faChevronRight} />
                    </i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Footer Start --> */}
      <div class="container-fluid bg-light mt-5 py-5">
        <div class="container pt-5">
          <div class="row g-5">
            <div class="col-lg-3 col-md-6">
              <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Get In Touch
              </h5>
              <p class="mb-4">
                No dolore ipsum accusam no lorem. Invidunt sed clita kasd clita
                et et dolor sed dolor
              </p>
              <p class="mb-2">
                <i class="bi bi-geo-alt text-primary me-2"></i>123 Street, New
                York, USA
              </p>
              <p class="mb-2">
                <i class="bi bi-envelope-open text-primary me-2"></i>
                info@example.com
              </p>
              <p class="mb-0">
                <i class="bi bi-telephone text-primary me-2"></i>+012 345 67890
              </p>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Quick Links
              </h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>About Us
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Meet The
                  Team
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog
                </a>
                <a class="text-body" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Popular Links
              </h5>
              <div class="d-flex flex-column justify-content-start">
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Home
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>About Us
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Our
                  Services
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Meet The
                  Team
                </a>
                <a class="text-body mb-2" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog
                </a>
                <a class="text-body" href="#">
                  <i class="bi bi-arrow-right text-primary me-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <h5 class="text-uppercase border-start border-5 border-primary ps-3 mb-4">
                Newsletter
              </h5>
              <form action="">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="Your Email"
                  />
                  <button class="btn btn-primary">Sign Up</button>
                </div>
              </form>
              <h6 class="text-uppercase mt-4 mb-3">Follow Us</h6>
              <div class="d-flex">
                <a class="btn btn-outline-primary btn-square me-2" href="#">
                  <i class="bi bi-twitter"></i>
                </a>
                <a class="btn btn-outline-primary btn-square me-2" href="#">
                  <i class="bi bi-facebook"></i>
                </a>
                <a class="btn btn-outline-primary btn-square me-2" href="#">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a class="btn btn-outline-primary btn-square" href="#">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
            <div class="col-12 text-center text-body">
              <a class="text-body" href="">
                Terms & Conditions
              </a>
              <span class="mx-1">|</span>
              <a class="text-body" href="">
                Privacy Policy
              </a>
              <span class="mx-1">|</span>
              <a class="text-body" href="">
                Customer Support
              </a>
              <span class="mx-1">|</span>
              <a class="text-body" href="">
                Payments
              </a>
              <span class="mx-1">|</span>
              <a class="text-body" href="">
                Help
              </a>
              <span class="mx-1">|</span>
              <a class="text-body" href="">
                FAQs
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid bg-dark text-white-50 py-4">
        <div class="container">
          <div class="row g-5">
            <div class="col-md-6 text-center text-md-start">
              <p class="mb-md-0">
                &copy;{" "}
                <a class="text-white" href="#">
                  Your Site Name
                </a>
                . All Rights Reserved.
              </p>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <p class="mb-0">
                Designed by{" "}
                <a class="text-white" href="https://htmlcodex.com">
                  HTML Codex
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
      {/* <!-- Services End --> */}
    </div>
  );
};
export default Navbar;
