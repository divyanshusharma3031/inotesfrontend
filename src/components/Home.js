import React from "react";
import { Link } from "react-router-dom";
import Notes from "./Notes";
import Addnote from "./Addnote";
import "./Home.css";
function Home(props) {
  return (
    <>
      <div className="hero">
        <div className="content">
          <h1>Solution To All Your Note Solving Problems</h1>
          <p>We provide world class financial assistance</p>
          <Link to="/about" class="btn">
            <i class="fas fa-chevron-right"></i> Read More
          </Link>
        </div>
      </div>
      <Addnote />
      <div className="container">
        <h1 className="my-5 comlor">Your Notes</h1>
        <Notes showalert={props.showalert} />
      </div>
    </>
  );
}

export default Home;
