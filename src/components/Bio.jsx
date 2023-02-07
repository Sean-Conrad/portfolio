import React from "react";

function Bio() {
  return (
    <section id="bio-section">
        <div class="row container-1">
          <div class="col-md-4">
          <h2>Sean Conrad Murphy Atangan</h2>
            <img
              class="bio-img"
              src="images/sean-headshot.jpeg"
              alt="Sean"
            />
          </div>
        <div class="col-md-4 container-colored">
          <h3>About Me</h3>
          <p>Full Stack Web Developer</p>
          <p>Bachelors of Science in Computer Engineering</p>
          <p>University of Illinois Chicago</p>
          <p>
            Clifton strengths: Relator, Command, Adaptability, Restorative,
            Deliberative
          </p>
          <p>ISTP Myers Briggs personality type</p>
        </div>
        <div class="col-md-4 container-colored">
          <h3>Skills </h3>
          <p>HTML/CSS ----------------------- ★★★★★</p>
          <p>JavaScript ----------------------- ★★★★★</p>
          <p>Node.js -------------------------- ★★★★☆</p>
          <p>React.js -------------------------- ★★★☆☆</p>
          <p>MongoDB ------------------------ ★★★★☆</p>
          <p>Python --------------------------- ★★★★★</p>
          <p>C/C++ --------------------------- ★★★★☆</p>
        </div>

        </div>
    </section>
  );
}

export default Bio;
