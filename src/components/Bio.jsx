import React from "react";

function Bio() {
  return (
    <section class="bio-section">
      <div class="row">
        <div class="col-lg-12">
          <img
            class="bio-img"
            src="data:image/jpeg;base64,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"
            alt="Sean"
          />
          <h2>Sean Conrad Murphy Atangan</h2>
          <p>Full Stack Web Developer</p>
          <p>Bachelors of Science in Computer Engineering</p>
          <p>University of Illinois Chicago</p>
          <p>
            Clifton strengths: Relator, Command, Adaptability, Restorative,
            Deliberative
          </p>
          <p>ISTP Personality type</p>
        </div>
        <div class="col"></div>
      </div>
    </section>
  );
}

export default Bio;
