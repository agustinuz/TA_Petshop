import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <body className="bg-transparent">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5 bg-white">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">
                        Login
                      </h3>
                    </div>
                    <div className="card-body">
                      <p className="font-italic"></p>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                          />
                          <label htmlFor="email">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            className="form-control"
                            name="password"
                            type="password"
                            placeholder="Password"
                          />
                          <label htmlFor="password">Password</label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id="inputRememberPassword"
                            type="checkbox"
                            value=""
                          />
                          <label
                            className="form-check-label"
                            for="inputRememberPassword"
                          >
                            Remember Password
                          </label>
                        </div>
                        <div className="d-flex align-items-center justify-content-between mt-4 mb-0">
                          <Link className="small" to="/Forgot">
                            Forgot Password?
                          </Link>
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small">
                        <Link to="/register">Need an account? Sign up!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </body>
  );
};

export default Login;
