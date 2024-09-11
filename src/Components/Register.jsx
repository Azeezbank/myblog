import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [mismatch, setMismatch] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      setMismatch(true);
      return;
    }

    try {
      const response = await fetch("https://backend-i9tl.onrender.com/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, gmail, password }),
      });

      if (response.ok) {
        // Clear the form fields after successful submission
        setUsername("");
        setGmail("");
        setPassword("");
        setSuccess(true);
      } else {
        // Optionally handle non-OK responses here
        console.error("Failed to add user.");
      }
    } catch (error) {
      // Optionally handle network or other errors here
      console.error("Failed to add user.", error);
    }
  };

  return (
    <>
    <div className="container-fluid bg-light pb-5">
      <div className="container">
      <form onSubmit={handleSubmit} className="bg-white p-4 was-validated">
        <div>
        <label htmlFor="username" className="form-label">Username:*</label>
        <input
          type="text"
          value={username}
          id={"username"}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Input username"
          className={"form-control"}
          required
        />
          <div className="valid-feedback mb-4">Valid.</div> <div className="invalid-feedback mb-3">Username must not empty.</div>
        </div>

        <div>
        <label htmlFor={"email"} className="form-label">Email:*</label>
        <input
          type="email"
          value={gmail}
          id={"email"}
          onChange={(e) => setGmail(e.target.value)}
          placeholder="Input valid email" className={"form-control"}
          required
        />
          <div className="valid-feedback mb-3">Valid.</div> <div className="invalid-feedback mb-3">Email must not empty.</div>
        </div>

        <div>
        <label htmlFor={"password "} className="form-label">Password:*</label>
        <input
          type="password"
          value={password}
          id={"password"}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Input password" className={"form-control"}
          required
        />
          <div className="valid-feedback mb-3">Valid.</div> <div className="invalid-feedback mb-3">Password must not empty.</div>
        </div>

        <label htmlFor={"confirmPasswors"} className="form-label">Confirm password:*</label>
        <input type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Input password again"
          className="form-control mb-1"
          required 
          />
        {mismatch && <p className="text-danger mb-3">Password do not match</p>}

        <button type="submit" className="btn btn-danger mt-4 mb-3">Register</button>
      </form>
        {success && <p className="text-danger text-center pt-5">Registration successful, please <Link to={"/Password"}>login</Link></p>}
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
                <p>Experience the joy of culinary exploration, where each recipe, reviews
                  and tip nourishes the soul just like a melody ot a masterpiece. Let our content inspire
                  your next meal.
                </p>
                <h3>Stay Connected</h3>
                <p>I share delicious and thoughtfully curated content occasionally-no spam, just the good stuff. Promise.</p>
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
      <p>Copyright 2024 Bankky Blogger || Alright Reserve <br/> Subscribe for newsletter</p>
      </div>
    </>
  );
};

export default Register;
