import React from "react";

function Projects() {
  return (
    <section class="projects-section">
      <h1>Projects</h1>
      <div class="row">
        <div class="tier-column col-lg-4">
          <div class="card" style={{ background: "#030017" }}>
            <div class="card-header">
              <h2>Dashboard</h2>
              <img
                src="images/PMVCorps.png"
                alt="PMV-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div class="card-body"></div>
          </div>
        </div>

        <div class="tier-column col-lg-4">
          <div class="card" style={{ background: "#030017" }}>
            <div class="card-header">
              <h2>Smart Dashcam</h2>
              <img
                src="images/PMVCorps.png"
                alt="PMV-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div class="card-body"></div>
          </div>
        </div>

        <div class="tier-column col-lg-4">
          <div class="card" style={{ background: "#030017" }}>
            <div class="card-header">
              <h2>Google Keep Clone</h2>
              <img
                src="images/PMVCorps.png"
                alt="PMV-logo"
                style={{ width: "100%" }}
              />
            </div>
            <div class="card-body"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
