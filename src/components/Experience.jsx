import React from "react"

function Experience(){
    return(
        <section class="exhibit-section">
            <h1>Experience</h1>
            {/* Dashboard  */} 
      <div class="row container-1">
        <div class="tier-column col-lg-6">
          <div class="card" style={{ background: "#030017" }}>
            <div class="card-header">
              <h2>PMV Corporations Dashboard</h2>
              <img
                class="project-thumbnail"
                src="images/PMVCorps.png"
                alt="PMV-logo"
                style={{ width: "50%" }}
              />
              <p> • Building a bare bones Dashboard application to manage inquiries from potential partners and employees</p>
              <p> • Utilizing MERN stack (React Front End, Express/Node/MongoDB Back End)</p>
              <p> • Implemented User Authentication using JSON Web Tokens for Admin users to assign tickets to employees</p>
              <p> • Customers and potential new hires push data to the dashboard database via company website</p>
              <p> • Application queries for existing contract and career data from MongoDB Atlas database and displays on the dashboard for Admin users</p>
              <a class="button-link" href="https://github.com/Sean-Conrad/Dashboard">View on Github!</a>
            </div>
            <div class="card-body"></div>
          </div>
        </div>


        <div class="tier-column col-lg-6">
        <iframe width="675" height="450"
          src="https://youtube.com/embed/MMEj0msnogY">
        </iframe>
        </div>
      </div>

{/* PMV Website  */} 
            <div class="row">
              <div class="tier-column col-lg-4">
                <div class="card" style={{ background: "#030017" }}>
                  <div class="card-header">
                    <h2>PMV Corporations Website</h2>
                    <img
                      src="images/pmv-quote.jpeg"
                      alt="PMV-logo"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div class="card-body">
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <h3 class="experience-text"></h3>
                <p>• Redesigned website using technologies (HTML, CSS, JavaScript, Node.js, Bootstrap, Amazon Web Services)</p>
                <p>• Created a 7-page design to highlight projects and improve the companies’ contract hit rate and hiring process</p>
                <p>• Planned and implemented fully responsive design, used keywords, image compression via Adobe Lightroom, and conventional image naming to improve SEO </p>
                <p>• Reinforced company credibility by including approved, positive testimonials from previous company partners and listing important certifications/credentials</p>
                <p>• Distinguished between both companies though a designated Installations page and Temps Agency page, as well as other client requests</p>
                <p>• Deployed the final application while implementing agile principles and CI/CD (Git and AWS)</p>
                <p>• Responsible for regular maintenance, updates, and hosting services</p>
                <a class="button-link" href="https://pmvcorps.com">Visit!</a>
              </div>
              <div class="col-lg-4">
                    <img
                      src="images/PMV.jpeg"
                      alt="PMV-logo"
                      style={{ width: "100%" }}
                    />
              </div>
            </div>
        </section>
    )
}

export default Experience;