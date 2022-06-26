import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

function Signup() {
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  let history=useHistory();
  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    console.log(credentials.name,credentials.email, credentials.password);
    const response = await fetch(`https://backendinotes.herokuapp.com/api/auth/createuser`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    localStorage.setItem("token", json.jwtData);
    history.push("/");
  };
  return (
    <div className="container mx-3 my-3">
      <form onSubmit={handlesubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            name="name"
            onChange={onChange}
            value={credentials.name}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
            value={credentials.email}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            value={credentials.password}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="cpassword"
            onChange={onChange}
            value={credentials.cpassword}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Signup;
