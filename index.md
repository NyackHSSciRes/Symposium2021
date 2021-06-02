<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <link rel="shortcut icon" type="image/png" href="SciRes Flavicon.png">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
    
    <style>
      header {
        display: none;
      }
    
      nav {
        background-color: #14213d;
        color: #ffb703;
        display: block;
        font-size: 16px;
        padding: 0px;
        margin: 0px;
        
      }
      
      h1, .webinar-link {
        display: inline-block;
        text-align: left;
        font-size: 24px;
        padding: 10px;
        margin: 0px;
      }
      
      body {
        font-family: 'Roboto', sans-serif;
        font-size: 18px;
        margin: 0px;
        overflow-x: hidden;
      }
      
      .land-dropdwn, .student-dropdwn, .resource-dropdwn {
        position: relative;
        display: inline-block;
        padding: 8px 50px;
        margin: 0px;
        font-size: 22px;
      }
      
      .land-dropdwn-content, .student-dropdwn-content, .resource-dropdwn-content {
        display: none;
        position: absolute;
        background-color: #ffffff;
        min-width: 200px;
        padding: 12px 16px;
        z-index: 1;
      }
      
      .land-dropdwn:hover .land-dropdwn-content, .student-dropdwn:hover .student-dropdwn-content, .resource-dropdwn:hover .resource-dropdwn-content {
        display: block;
        color: #ffffff;
        background-color: #ffb703;
        text-decoration: none;
      }
      
      .dont-highlight:hover {
        color: inherit;
        background-color: inherit;
      }
      
      a {
        color: inherit;
        text-decoration: none;
        display: block;
        padding: 5px;
      }
      
      a:hover {
        color: #ffb703;
        background-color: #ffffff;
      }
      
      .banner {
        background-image: url("https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fscires-symp-banner.svg?v=1620252438346");
        background-size: cover;
        height: 100px;
        width: auto;
        margin: 0px;
        padding: 0px;
        background-repeat: no-repeat;
      }
      
      h3 {
        text-align: center;
        color: #ffb703;
        padding: 40px;
        font-size: 22px;
      }
      
      span {
        background-color: #14213d;
      }
      
      p.intro-content {
        padding-left: 30px;
        padding-right: 30px;
        font-size: 18px;
      }
      
      .visible-link {
        color: #ffb703;
        text-decoration: underline;
      }
      
      .visible-link:hover {
        background-color: #ffb703;
        color: #ffffff;
      }
      
      video {
        width: 75%;
        display: block;
        margin-left: auto;
        margin-right: auto;
      }
      
      .video-caption {
        text-align: center;
        color: #4571c7;
      }
      
      table {
        font-size: 18px;
        text-align: center;
        border: 1px solid #14213d;
        margin-top: 40px;
        margin-bottom: 40px;
        margin-right: auto;
        margin-left: auto;
      }
      
      .fl {
        float: left;
      }
      
      #project-thumbnails {
        width: auto;
        white-space: nowrap;
        overflow-x: none;
      }
      
      .scrolling {
        display: inline-block;
        margin: 10px;
        padding: 10px;
        height: 400px;
        width: 30%;
      }
      
      .scrolling-content {
        height: 360px;
        overflow-y: auto;
        white-space: normal;
        vertical-align: middle;
      }
      
      #sophomore-thumbnails {
        background-color: #6aa84f;
        color: #fff;
      }
      
      #junior-thumbnails {
        background-color: #599bd5;
        color: #fff;
      }
      
      #senior-thumbnails {
        background-color: #4571c7;
        color: #fff;
      }
      
      #index-sen-project-desc, #index-jun-project-desc, #index-soph-project-desc {
        font-size: 18px;
      }
      
      .preview-img {
        margin-left: 10%;
        width: 80%;
      }
      
      .caption {
        overflow-wrap: break-word;
        font-size: 12px;
      }
      
      button {
        border: none;
        display: inline-block;
        width: 50px;
        height: 30px;
        background-color: rgba(0,0,0,0);
        color: #ffb703;
        font-size: 18px;
        margin-bottom: 10px;
      }
      
      button:hover {
        background-color: #ffb703;
        color: white;
      }
      
      .left-btn {
        float: left;
      }
      
      .right-btn {
        float: right;
      }
      
      /* width */
      ::-webkit-scrollbar {
        width: 10px;
      }

      /* Track */
      ::-webkit-scrollbar-track {
        background: #f1f1f1; 
      }
 
      /* Handle */
      ::-webkit-scrollbar-thumb {
        background: #ffb703; 
      }
      
      #agenda, #project-thumbnails, footer {
        margin-top: 30px;
      }
      
      footer {
        display: block;
        padding: 10px;
        background-color: #14213d;
        color: #ffb703;
      }
      
      .center {
        display: block;
        text-align: center;
      }
    </style>
    
    <script src="./script.js" defer></script>
    
  </head>
  <body>
    <nav>
      
      <h1>Nyack High School Science Research Symposium 2021</h1>
      
      <div class="land-dropdwn">
        <a class="dont-highlight">Landing Page</a>
        <div class="land-dropdwn-content">
          <a href="./#intro-info">Intro Info <br></a>
          <a href="./#agenda">Agenda<br></a>
          <a href="./#project-thumbnails">Project Thumbnails</a>
        </div>
      </div>
      
      <div class="student-dropdwn">
        <a class="dont-highlight" href="./students.html">Student Projects</a>
        <div class="student-dropdwn-content">
          <a href="./students.html#senior-projects">Seniors</a>
          <a href="./students.html#junior-projects">Juniors</a>
          <a href="./students.html#sophomore-projects">Sophomores</a>
        </div>
      </div>
      
      <div class="resource-dropdwn">
        <a class="dont-highlight">Resources</a>
        <div class="resource-dropdwn-content">
          <a href="https://nyack-public-schools.echalksites.com/groups/15029/science/science_research">Nyack SciRes Website<br></a>
          <a href="https://www.albany.edu/scienceresearch/">UAlbany SciRes Website<br></a>
          <a href="https://nyackhsscires.github.io/Symposium/">Last Year's Symposium Website<br></a>
        </div>
      </div>
      
    </nav>
    
    <div id="intro-info">
      
      <div class="banner">
        <h3><span><a class="webinar-link" href="https://zoom.us/j/95886465408"><i>&nbsp;Join the Webinar, Starting at 5:45 PM, June 2nd&nbsp;</i></a></span></h3>
      </div>
      <p class="intro-content">You can click on the title of the header above for the link to the main room of the zoom webinar, starting at 5:45 PM. Also you can find the link and other joining information below. Information to join the individual webinars to ask questions about student projects after the main events can be found below as well as on the individual student webpages. Note students will be broken up into three different rooms for answering questions.</p>
      <p class="intro-content">Science Research Symposium 2021 - Main Room. <br>
        Link to join the webinar: <a class="visible-link" href="https://zoom.us/j/95886465408">https://zoom.us/j/95886465408</a> <br>
        Telephone: 1 646 558 8656 <br>
        Webinar ID: 958 8646 5408
      </p>
      <p class="intro-content"> Science Research Symposium 2021 - Room 1 <br>
        Student Panelists: Talia Spatz, Janice Yohannen, Quinn Connor, Juliet Lovelace, Will Eisen <br>
        Link to join the webinar: <a class="visible-link" href="https://tinyurl.com/9amhxc9w">tinyurl.com/9amhxc9w</a><br>
        Telephone: 1 646 558 8656<br>
        Webinar ID: 939 7011 4596<br>
      </p>
      <p class="intro-content"> Science Research Symposium 2021 - Room 2 <br>
        Student Panelists: Madison Milla, Robert Murrell, Jaydn Turner, Richard Feldman <br>
        Link to join the webinar: <a class="visible-link" href="https://zoom.us/j/96659294469">https://zoom.us/j/96659294469</a><br>
        Telephone: 1 646 558 8656<br>
        Webinar ID: 966 5929 4469<br>
      </p>
      <p class="intro-content"> Science Research Symposium 2021 - Room 3 <br>
        Student Panelists: Adriana Gleeson, Margaret Palmer, Lukas Chyla, Mateo Sanabria, Andrea Garcias <br>
        Link to join the webinar: <a class="visible-link" href="https://zoom.us/j/98414307966">https://zoom.us/j/98414307966</a><br>
        Telephone: 1 646 558 8656<br>
        Webinar ID: 984 1430 7966<br>
      </p>
      
      <div class="banner">
        <h3><span><i>&nbsp;Introductory Information&nbsp;</i></span></h3>
      </div>
        
      <p class="intro-content">Thanks for visiting the symposium 2021 website! The event will start on Wednesday, June 2nd at 5:45 PM but until then, feel free to check out the project previews provided to see what the science research students are doing.</p>
      <p class="intro-content">"Science Research is a three year college course run through the University of Albany. Students in this course pursue their scientific interests through professional level research. This can be anything from studying psychology to carbon nanotubes. Students also find a well-established mentor in their field to guide them through the research they decide to pursue."</p>
      <p class="intro-content">The annual symposium gives students from all grades the opportunity to present the research they've conducted in their field of choice. Sophomores and Juniors will present their posters based on preliminary background research, while Seniors give poster and slides presentations on their completed projects. Afterwards you can ask every student any questions you have about their research. We'll be available until 8:00 on symposium night, June 2st, to answer them!</p>
      
      <video controls width="90%">
        <source src="https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2FTeasdale%20Sci%20Res%202021.mp4?v=1615766303029" type="video/mp4">
        Sorry, your browser doesn't support embedded videos
      </video>
      <p class="video-caption"><i>A video from our Vice Principle, Mr. Teasdale, about the Science Research Program.</i></p>

    </div>
    
    <div id="agenda">
      <div class="banner">
        <h3><span><i>Agenda</i></span></h3>
      </div>
        
      <table>
        <tr>
          <th>Times</th>
          <th>Events</th>
        </tr>
        <tr>
          <td>5:45</td>
          <td class="fl">Begin welcoming attendees to zoom webinar</td>
        </tr>
        <tr>
          <td>6:00</td>
          <td class="fl">The main webinar begins, with senior presentations</td>
        </tr>
        <tr>
          <td>7:15</td>
          <td class="fl">Start smaller breakout zooms for junior and sophomore projects, available to answer questions</td>
        </tr>
        <tr>
          <td>8:00</td>
          <td class="fl">End the night's festivities</td>
        </tr>
      </table>
    </div>
    
    <div id="project-thumbnails">
      <div class="banner">
        <h3><span><i>Project Thumbnails</i></span></h3>
      </div>
      <div class="scrolling" id="sophomore-thumbnails">
        <div class="scrolling-content">
          <h4 id="index-soph-project-title">Project Title</h4>
          <h5 id="index-soph-student-name">Student Name</h5>
          <p id="index-soph-project-desc">Small description of project</p>
          <img class="preview-img" id="index-soph-picture">
          <p class="caption" id="index-soph-source-caption"></p>
        </div>
        <button class="soph left-btn" id="index-soph-left-button" onclick="sophLeft()">&lt;</button>
        <button class="soph right-btn" id="index-soph-right-button" onclick="sophRight()">&gt;</button>
      </div>
      
      <div class="scrolling" id="junior-thumbnails">
        <div class="scrolling-content">
          <h4 id="index-jun-project-title">Project Title</h4>
          <h5 id="index-jun-student-name">Student Name</h5>
          <p id="index-jun-project-desc">Small description of project</p>
          <img class="preview-img" id="index-jun-picture">
          <p class="caption" id="index-jun-source-caption"></p>
        </div>
        <button class="jun left-btn" id="index-jun-left-button" onclick="junLeft()">&lt;</button>
        <button class="jun right-btn" id="index-jun-right-button" onclick="junRight()">&gt;</button>
      </div>
      
      <div class="scrolling" id="senior-thumbnails">
        <div class="scrolling-content">
          <h4 id="index-sen-project-title">Project Title</h4>
          <h5 id="index-sen-student-name">Student Name</h5>
          <p id="index-sen-project-desc">Small description of project</p>
          <img class="preview-img" id="index-sen-picture">
          <p class="caption" id="index-sen-source-caption"></p>
        </div>
        <button class="sen left-btn" id="index-sen-left-button" onclick="senLeft()">&lt;</button>
        <button class="sen right-btn" id="index-sen-right-button" onclick="senRight()">&gt;</button>
      </div>
    </div>
    
    <footer>
      Thank you to everyone who makes the science research symposium possible, especially our amazing science research teachers, Ms. Jacobson, Ms. Kleinman, and Ms. Foisy! <br><span class="center"><i>For the Glory of Science!</i></span>
    </footer>
  </body>
</html>
