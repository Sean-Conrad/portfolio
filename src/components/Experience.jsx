import React from "react"

function Experience(){
    return(
        <section class="exhibit-section">
            <h1>Experience</h1>
            <div class="row">
              <div class="tier-column col-lg-4">
                <div class="card" style={{ background: "#030017" }}>
                  <div class="card-header">
                    <h2>PMV Corporations</h2>
                    <img
                      src="images/PMVCorps.png"
                      alt="PMV-logo"
                      style={{ width: "80%" }}
                    />
                  </div>
                  <div class="card-body">
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <h3 class="experience-text"></h3>
                <p>• Redesigned website using technologies (HTML, CSS, JavaScript, Node.js, Bootstrap, Amazon Web Services)</p>
                <p>• Created a sleek 7-page design to highlight projects and improve the companies’ contract hit rate and hiring process.</p>
                <p>• Addressed SEO through fully responsive design, keywords, and image naming/compression via Adobe Lightroom</p>
                <p>• Constituted credibility by including approved, positive testimonials from previous company partners and listing important certifications/credentials</p>
                <p>• Distinguished between both companies though a designated Installations page and Temps Agency page</p>
                <p>• Deployed the final application while implementing agile principles and CI/CD (Git and AWS)</p>
                <p>• Responsible for regular maintenance, updates, and hosting services</p>
              </div>
              <div class="col-lg-4">
                    <img
                      src="images/PMV.jpeg"
                      alt="PMV-logo"
                      style={{ width: "100%" }}
                    />
                    <a class="button-link" href="https://pmvcorps.com">Visit!</a>
              </div>
            </div>
        </section>
    )
}

export default Experience;