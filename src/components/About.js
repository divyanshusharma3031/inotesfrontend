import React from "react";
// import Notecontext from '../Context/Notes/NoteContext'
// import { useEffect } from 'react'
import "./About.css";
import "./Aboutmobile.css";
import katyan from "../Images/Katyan.jpeg";
import person1 from "../Images/person1.jpg"
import person2 from "../Images/person2.jpg";

function About() {
  // const a=useContext(Notecontext)
  // useEffect(() => {
  //     a.update()
  //   },[])
  return (
    <>
      <section id="about-info" class="bg-light">
        <div className="fragment1">
          <div class="container1 upper">
            <div class="info-left1">
              <h1 class="l-heading1">
                <span class="text-primary1">About</span> iNotes
              </h1>
              <p>
                Fed up of paying dollars for storing notes and day to day
                thoughts? iNotes is a free to use website which allows users to
                store, update and delete notes anywhere accross the globe.{" "}
              </p>
              <p>
                Users don't have to worry about the privacy of the data. iNotes
                uses bcryptjs to securely store the passwords of each user. With
                no data limit iNotes is the best notes storing app accross the
                world.
              </p>
            </div>

            <div class="info-right1">
              <i class="fa-solid fa-note-sticky fa-10x"></i>
            </div>
          </div>
        </div>
      </section>

      <div class="clr"></div>

      <section id="testimonials" class="py-5">
        <div class="container1">
          <h2 class="l-heading1">What Our Users Say</h2>
          <div class="testimonial bg-primary1">
            <img src={person1} alt="Samantha" />
            <p>
              This is one of the most useful Website . The interface is so
              simple yet elegant. We could move across our accounts at much ease
              and all the articles can be easily organised. It is the best app
              that I have used for notes and more. The UI is very clear,easy to
              use,effective.{" "}
            </p>
          </div>
          <div class="testimonial bg-primary1">
            <img src={person2} alt="Jen" />
            <p>
              This website has made my life much more simpler. Using this site I
              can access my notes anywhere accross the globe. No need to sync
              account. No limit of data storage is another boon. It has been a
              simple, user-friendly and seamless experience to use this app.
            </p>
          </div>
        </div>
      </section>
      <section id="team" class="team section-padding">
        <header class="section-header1">
          <h2>About The Developer </h2>
        </header>
        <div class="flex-items">
          <div>
            <img src={katyan} alt="" />
            <h4>Divyanshu Katyan</h4>
            <p className="devpara">I am a btech 3rd year student from Delhi Technological university and I Can develop websites using MERN Efficiently </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
