import React from "react";

const Contact = () => {
  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger bg-gradient fixed-top">
        <div className="container-fluid">
          <span
            href="#"
            className="navbar-brand"
            style={{ fontSize: "2.2rem", fontWeight: "bold" }}
          >
            Bankky <small>Blog.</small>
          </span>
          <button
            className="navbar-toggler bg-light bg-gradient"
            type=" button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav">
              <hr />
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">HOME</span>
                </li>
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span>ABOUT Us</span>
                  </span>
                </li>
              </Link>
              <Link to="/AllPost" className="link">
                <li className="nav-item">
                  <span className="nav-link">BLOG</span>
                </li>{" "}
              </Link>
              <Link to="/" className="link">
                <li className="nav-item">
                  <span className="nav-link">
                    <span> SERVICE </span>
                  </span>
                </li>
              </Link>
              <Link to="/Login" className="link">
                <li className="nav-item">
                  <span className="nav-link" href="">
                    My Account
                  </span>
                </li>
              </Link>

              <button className="btn bg-light text-dark btn- rounded-pill">
                LET'S TALK
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div
        className="container-fluid"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-vector/man-with-blue-shirt-blue-shirt-has-green-eyes_169196-13007.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="account text-white">
          <h2 className="my text-center">Contact</h2>
        </div>
      </div>
      <div className="container-fluid bg-light p-3">
        <div className="row">
          <div className="col-sm-4 text-center">
            <h1 className="mt-5">
              <i className="bi bi-headset bg-danger p-4 rounded-circle text-white"></i>
            </h1>
            <p className="pt-4 text-danger">SAY HELLO</p>
            <h3>Get in touch with us</h3>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-2 mt-2 text-end">
            <h3>
              <i className="bi bi-phone bg-danger text-white p-3 rounded-circle"></i>
            </h3>
          </div>
          <div className="col-10 text-start ps-4">
            <p className="text-danger">Call now</p>
            <h5>+2349061324918</h5>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-2 mt-2 text-end">
            <h3>
              <i className="bi bi-chat bg-danger text-white p-3 rounded-circle"></i>
            </h3>
          </div>
          <div className="col-10 text-start ps-4">
            <p className="text-danger">Our support mail</p>
            <h5>bankoleazeezb98@gmail</h5>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-2 mt-2 text-end">
            <h3>
              <i className="bi bi-geo-alt bg-danger text-white p-3 rounded-circle"></i>
            </h3>
          </div>
          <div className="col-10 ps-4">
            <p className="text-danger">Our Address</p>
            <h5>5, Secretariat, Iragbiji, Osun State, Nigeria.</h5>
          </div>
        </div>

        <div
          className="container mt-5"
          style={{
            backgroundImage:
              "url('https://skytechgeek.com/wp-content/uploads/2019/03/become-food-blogger.jpg')",
          }}
        >
          <div
            className=" bg-white opacity-75 text-danger"
            style={{ marginLeft: "-12px", marginRight: "-12px" }}
          >
            <div className="p-3 pb-5">
              <h2 className=" text-center pt-3">Contact Us</h2>

              <form className="was-validated">
                <div>
                  <label htmlFor="name" className="form-label mt-2">
                    Name: (required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-control bg-danger text-white"
                    placeholder="Enter your name"
                    required
                  />
                  <div className="valid-feedback">Valid ✔️</div>{" "}
                  <div className="invalid-feedback">Please fill the field</div>
                </div>

                <div>
                  <label htmlFor="email" className="form-label mt-3">
                    Email: (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control bg-danger text-white"
                    placeholder="Enter your email"
                    required
                  />
                  <div className="valid-feedback">Valid ✔️</div>{" "}
                  <div className="invalid-feedback">Please fill this field</div>
                </div>

                <div>
                  <label htmlFor="message" className="form-label mt-3">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="form-control card-text bg-danger text-white"
                    placeholder="Enter your message"
                    rows="4"
                    required
                  ></textarea>
                  <div className="valid-feedback">Valid ✔️</div>{" "}
                  <div className="invalid-feedback">Please fill this field</div>
                </div>
                <button
                  type="submit"
                  className="btn mt-3 bg-danger text-white"
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <iframe
            className="border"
            height="400"
            src="https://www.openstreetmap.org/export/embed.html?bbox=4.652366638183595%2C7.872224168697813%2C4.71416473388672%2C7.927654677765275&amp;layer=mapnik"
            style={{ width: "100%" }}
          ></iframe>
        </div>
      </div>

      <div className="container-fluid bg-danger p-5 pt-3 text-center text-white">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4">
            <div className="row">
              <div className="col-4 text-end pt-5">
                <h1>
                  <i className="bi bi-building"></i>
                </h1>
              </div>
              <div className="col-8 text-start pt-5">
                <h3>XTRA</h3>
                <p>BUSINESS</p>
              </div>
            </div>
            <p>
              A company is any entity that engages in business. Companies can be
              structured in different ways. For example, your company can be a
              sole proprietorship, a partnership, or a corporation.
            </p>
            <div className="row mt-4">
              <div className="col-2"></div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-facebook"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-twitter"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-telegram"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-linkedin"></i>
                </h2>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-8 pt-5">
                <h3>Join Our Community of 203,849 Food Lovers</h3>
                <p>
                  Experience the joy of culinary exploration, where each recipe,
                  reviews and tip nourishes the soul just like a melody ot a
                  masterpiece. Let our content inspire your next meal.
                </p>
                <h3>Stay Connected</h3>
                <p>
                  I share delicious and thoughtfully curated content
                  occasionally-no spam, just the good stuff. Promise.
                </p>
              </div>
              <div className="col-sm-4 pt-5">
                <h3>ADDRESS</h3>
                <p>Secretariat, Iragbiji, Osun State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top border-light bg-danger text-center text-light p-5">
        <p>
          Copyright 2024 Bankky Blogger || Alright Reserve <br /> Subscribe for
          newsletter
        </p>
      </div>
    </>
  );
};
export default Contact;
