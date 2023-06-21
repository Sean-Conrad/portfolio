import React from "react";

function Projects() {
  return (
    <section class="exhibit-section">
      <h1>Projects</h1>


{/* Google Keep Clone */}
      <div class="row container-1">
      <div class="tier-column col-lg-7">
        <div class="card" style={{ background: "#030017" }}>
          <div class="card-header">
            <h2>Google Keep Clone</h2>
            <img
              class="project-thumbnail"
              src="images/Google-keep-clone.jpeg"
              alt="PMV-logo"
              style={{ width: "65%" }}
            />
            <p>• Built a web app using technologies (JavaScript, HTML/CSS, Bootstrap, Node.js, React.js)</p>
            <p>• Utilized techniques such as abstracting components, function decomposition, and component tree management</p>
            <p>• Used state hooks to dynamically render components on screen to improve user experience</p>
            <p>• Implemented functions Add note and Delete note to re-render and reflect changes in real time</p>
            <a class="button-link" href="https://secure-shelf-65021.herokuapp.com/">Visit!</a>
          </div>
          
          <div class="card-body"></div>
        </div>
      </div>

      <div class="tier-column col-lg-4">
      <iframe class="project-video" width="506" height="337"
          src="https://youtube.com/embed/dgEHLd3CbbY">
        </iframe>
      </div>
    </div>

{/* Task List */}
<div class="row container-1">
      <div class="tier-column col-lg-7">
        <div class="card" style={{ background: "#030017" }}>
          <div class="card-header">
            <h2>Task List</h2>
            <img
              class="project-thumbnail"
              src="images/Task-list.jpeg"
              alt="PMV-logo"
              style={{ width: "65%" }}
            />
            <p>• Built a multi-page web app via technologies (JavaScript, HTML/CSS, Node.js)</p>
            <p>• Implemented multi page templating using JavaScript EJS</p>
            <p>• Used MongoDB Atlas and Mongoose database functionality to integrate savable states</p>
            <p>• Implemented version control using git and deployed the web app using Heroku</p>
            <a class="button-link" href="https://serene-shelf-88879.herokuapp.com/">Visit!</a>
          </div>
          <div class="card-body"></div>
        </div>
      </div>


      <div class="tier-column col-lg-4">

      <iframe class="project-video" width="506" height="337"
          src="https://youtube.com/embed/1dLpyvA5dg8">
        </iframe>
      </div>
    </div>

{/* Dashcam */}
<div class="row container-1">
      <div class="tier-column col-lg-7">
        <div class="card" style={{ background: "#030017" }}>
          <div class="card-header">
            <h2>Dashcam</h2>
            <img
              class="project-thumbnail"
              src="images/Dashcam.jpeg"
              alt="PMV-logo"
              style={{ width: "65%" }}
            />
            <p>• Led a team of 4 computer engineer students to develop a dashcam identify vehicles on the rode during amber alerts</p>
            <p>• Employed Computer Vision and Transfer-Learning methods to train the application to identify car make and model</p>
            <p>• Trained and optimized machine learning model to accurately classify specific cars with over 92% average confidence</p>
            <p>• Developed the user interface, GPS/camera functionality, and frame design. (Python, Mobile-Net, YOLOnet, TKinter,SOLIDWORKS)</p>
            <p>• Placed 2nd in Machine Learning category at University of Illinois 2021 Engineering Expo</p>
            <a class="button-link" href="https://github.com/Sean-Conrad/Smart-Dash-Cam">View on Github!</a>
          </div>
          <div class="card-body"></div>
        </div>
      </div>

      <div class="tier-column col-lg-4">
          {/* <img
            src="images/Dashcam.jpeg"
            alt="PMV-logo"
            style={{ width: "100%" }}
          /> */}
        {/* <video width="600" contols>
            <source src="images/Dashboard-demo.mov" type="video/mp4"/>
          </video> */}
          <iframe class="project-video" title="FOX WIRE EXPO" 
            src="https://player.vimeo.com/video/532449896?h=eab9e45d7d&amp;dnt=1&amp;app_id=122963" 
            width="506" height="270" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen="">
          </iframe>
      </div>
    </div>
    </section>
  );
}

export default Projects;
