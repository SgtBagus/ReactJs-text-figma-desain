/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import update from "immutability-helper";
import { NotificationManager } from "react-notifications";
import axios from "axios";

import InputText from "../../Components/Form/InputText";
import InputCheckbox from "../../Components/Form/InputCheckbox";

import { LoadingContext } from "../../Context/LoadingContext";

import { CATCH_ERROR } from "../../Helper/Error";
import { API_BASE } from "../../Data/config/apiBase";

import "./custom.css";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    rememberMe: true,
  });

  const { dispatchLoading } = useContext(LoadingContext);

  const navigate = useNavigate();

  const { email, password, rememberMe } = form;

  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      navigate("/");
    }

    dispatchLoading(false);
  }, [dispatchLoading, navigate]);

  const changeInputHandler = async (type, val) => {
    const newForm = update(form, {
      [type]: { $set: val },
    });

    await setForm(newForm);
  };

  const loginHandler = async (e) => {
    e.preventDefault();

    const url = `${API_BASE}api/login`;
    await axios
      .post(url, form)
      .then((res) => {
        const {
          data: {
            user: { id, name, image, role, email },
            token,
          },
        } = res;
        const currentUser = { id, name, email, image, role, token };

        localStorage.setItem("currentUser", JSON.stringify(currentUser));
        window.location.href = "/";
      })
      .catch((error) => {
        NotificationManager.warning(
          CATCH_ERROR(error),
          "Terjadi Kesalahan",
          5000
        );
      });
  };

  return (
    <div className="container">
      <div className="card border-0 rounded shadow-sm px-4 py-5">
        <div className="card-body">
          <div className="text-center">
            <h4 className="fw-bold">Login to <span className="font-primary">GPS.ID TMS </span>Account</h4>
            <label>Please enter your email and password to continue</label>
          </div>

          <form onSubmit={loginHandler}>
            <div className="my-4">
              <div className="my-3">
                <label className="form-label fw-bold">Email address:</label>
                <InputText
                  type="email"
                  value={email}
                  placeholder="Masukkan Alamat Email"
                  changeEvent={(val, e) => changeInputHandler("email", val, e)}
                />
              </div>
              <div className="my-3">
                <div className="d-flex justify-content-between">
                  <label className="form-label fw-bold p-0">Password:</label>
                  <a href="#" className="form-label fw-light">Forget Password ?</a>
                </div>
                <InputText
                  type="password"
                  value={password}
                  placeholder="Masukkan Password"
                  changeEvent={(val, e) => changeInputHandler("password", val, e)}
                />
                <div className="my-2">
                  <InputCheckbox
                    id="rememberMe"
                    value={rememberMe}
                    name="rememberMe"
                    changeEvent={(val, e) => changeInputHandler("rememberMe", val, e)}
                    title="Remember Password"
                  />
                </div>
              </div>
            </div>

            <div className="d-grid gap-2 text-center my-2">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <div>
                Don't have an account ?
                {' '}
                <span>
                  Create Account
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
