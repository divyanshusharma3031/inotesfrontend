import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
function Login(props) {
  const [credentials, setcredentials] = useState({ email: "", password: "" });
  let history = useHistory();
  const handlechange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(credentials.email, credentials.password);
    const response = await fetch(`https://backendinotes.herokuapp.com/api/auth/login`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    if (json.success === true) {
      //redirect
      localStorage.setItem("token", json.jwtData);
      history.push("/");
      props.showalert("Welcome User", "success");
    } else {
      //show alert
      console.log(json.success);
      props.showalert("Invalid credentials", "danger");
    }
  };
  return (
    <>
      <h2 class="heamder">Login To Continue</h2>
      <form className="container my-3 faram" onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            onChange={handlechange}
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={handlechange}
            value={credentials.password}
          />
        </div>
        <button type="submit" className=" butn">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;
