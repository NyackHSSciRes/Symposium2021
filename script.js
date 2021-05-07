var sophProjectTitle = ["The Mental Effects of Adverse Childhood Experiences", "Lunar Geology: Addressing concerns for astronaut safety on Moon excursions", "Methods of Nanofabrication", "Climate Change’s Impact on Hurricane Intensity and Damage", "Effects of Music Therapy on clinical care patients", "The Impact of Climate Change on Mangrove Forests"];
var sophStudentName = ["Adriana Gleeson", "Madison Milla", "Robert Murrell", "Margaret Palmer", "Talia Spatz", "Janice Yohannan"];
var sophPicture = ["", "https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fmadison-preview.jpg?v=1620264294856", "", "", "", "https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fjanice-preview.jpg?v=1620264281796"];
var sophCaption = ["", "https://www.nbcnews.com/think/opinion/why-water-moon-matters-not-just-elon-musk-ncna1245002", "", "", "", "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flickr.com%2Fphotos%2Fippei-janine%2F5644425257&psig=AOvVaw2ElqSqg2TOGRZkhMc6dg45&ust=1619875193751000&source=images&cd=vfe&ved=0CA0QjhxqFwoTCJDS-pKIpvACFQAAAAAdAAAAABAJ"];
var sophProjectDesc = ["Adverse Childhood experiences can cause a variety of effects on the human body. I am researching how it effects mental health.", "Studying the moon allows us to further understand its evolution as well as significant information about Earth. It is important to study potentially harmful activities on the moon in order to guarantee the safety of astronauts on future missions.", "I'm looking into making newer and faster methods of nanofabrication than there currently are.", "Climate Change has led to stronger hurricanes. I am researching how the different aspects of climate change impact hurricane damage.", "Music therapy is a type of therapeutic music listening or playing that can effect certain illnesses developing in people. I am giong to study how music therapy can be used and even if its considerably more beneficial than other therapy techniques.", "Mangroves provide a lot for us, but they are not immune to the effects of climate change. I am researching their interaction with the environment and what is causing global mangrove loss."];

var junProjectTitle = ["Climate Change Effect on Local Wildlife Habitat", "Microplastic tides: Correlation of microplastic concentration & tidal patterns in the Hudson River", "Get in Touch: Fabricating a Soft Prosthetic Arm with Optics-Based Tactile Sensors", "The Effect of Location on Newspaper Bias on Coverage of School Shootings and The Psychological Impact of Injury on High School Athletes"];
var junStudentName = ["Lukas Chyla", "Quinn Connor", "Juliet Lovelace", "Jadyn Turner"];
var junPicture = ["","https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fquinn-preview.jpg?v=1620264301872","https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fjuliet-preview.jpg?v=1620263893152","https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fjadyn-preview1.jpg?v=1620264266551"];
var junCaption = ["", "Reuters Graphics (https://graphics.reuters.com/ENVIRONMENT-PLASTIC/0100B4TF2MQ/images/plastics/greenplate.jpg)", "http://www.cs.cmu.edu/~cga/bighero6/misc/concept-wristss.jpg, credited to Walt Disney Animation", "https://www.pbs.org/newshour/nation/police-responding-to-a-report-of-active-shooter-at-florida-high-school"];
var junProjectDesc = ["Over the last few decades climate change has been taking a huge toll on our wildlife and ecosystems. The greenhouse gas effect is the increasing surface temperature of the earth's crust due to an excessive release of greenhouse gases like methane or carbon dioxide. These awful conditions force animal species to migrate or even die off until extinction within the next few decades. My topic will focus on one of these species in the Hudson Valley region and I will test exactly how much climate change affects our local wildlife.", "Every year you consume a dinner plate's worth of microplastic. I'm researching how these small plastics concentrate in the Hudson River.", "Soft robots, much like soft people, tend to work better with others. I'm researching how that idea can be applied in prosthetics.", "The growth in media coverage has undoubtedly changed the narrative around school shootings and how they are seen in the public eye. My study looks at two school shootings and the way they were covered in two newspapers to determine if the location of the school shooting or the location of the news paper had any effect on the coverage.<br> An athlete's ability to push themselves can be both a strength and a weakness in their career. If an athlete sustains a severe injury that requires them to push through pain, they may put themselves in a position that requires them to be out for a longer period of time."];

//add photo and source?
var senProjectTitle = ["Methylamine Production from the Reduction of Inorganic Carbon in the Ocean of Enceladus", "Video Analysis of ACL, MCL, and PCL Injuries In the NFL", "Assessing the Commonality of Community Violence as an Adverse Childhood Experience in Rural, Suburban, and Urban Communities"];
var senStudentName = ["Will Eisen", "Richard Feldman", "Andrea Garcia"];
var senPicture = ["https://cdn.glitch.com/2432ad92-289b-49f2-8f5e-58cecbd60270%2Fwill-preview.jpg?v=1620264328770", "", ""];
var senCaption = ["https://www.wired.com/story/if-theres-life-on-saturns-moon-enceladus-it-might-look-like-this/", "", ""];
var senProjectDesc = ["Organic compounds are often made by life. I'm researching how one of those compounds exists on one of Saturn's moons.", "Athletes in the world of professional sports rely on their bodies to keep them employed, this is especially the case in the NFL. ACL, MCL, and PCL injuries are super common and can result in a player being out for over a year. The goal of this study is to find where the injury happens by finding a quad-to-knee angle in the video. ", "Adverse childhood experiences (ACEs) are stressful or potentially traumatic events that occur before the age of 18. There are 10 types of ACEs, not including Community Violence (CV). My research focuses on assessing the commonality of CV as an ACE type in rural, suburban, and urban communities."];

var sophi = 0;
var juni = 0;
var seni = 0;

updateScreen();

function sophLeft() {
  if (sophi === 0) {
    sophi = (sophProjectTitle.length - 1)
  } else {
    sophi = sophi - 1;
  }
  updateScreen();
}
function sophRight() {
  if (sophi === (sophProjectTitle.length - 1)) {
    sophi = 0;
  } else {
    sophi++;
  }
  updateScreen();
}

function junLeft() {
  if (juni === 0) {
    juni = (junProjectTitle.length - 1)
  } else {
    juni = juni - 1;
  }
  updateScreen();
}
function junRight() {
  if (juni === (junProjectTitle.length - 1)) {
    juni = 0;
  } else {
    juni++;
  }
  updateScreen();
}

function senLeft() {
  if (seni === 0) {
    seni = (senProjectTitle.length - 1)
  } else {
    seni = seni - 1;
  }
  updateScreen();
}
function senRight() {
  if (seni === (senProjectTitle.length - 1)) {
    seni = 0;
  } else {
    seni++;
  }
  updateScreen();
}

function updateScreen() {
  document.getElementById("index-sen-project-title").innerHTML = senProjectTitle[seni];
  document.getElementById("index-sen-student-name").innerHTML = senStudentName[seni];
  document.getElementById("index-sen-picture").src = senPicture[seni];
  document.getElementById("index-sen-source-caption").innerHTML = senCaption[seni];
  document.getElementById("index-sen-project-desc").innerHTML = senProjectDesc[seni];
  
  document.getElementById("index-jun-project-title").innerHTML = junProjectTitle[juni];
  document.getElementById("index-jun-student-name").innerHTML = junStudentName[juni];
  document.getElementById("index-jun-picture").src = junPicture[juni];
  document.getElementById("index-jun-source-caption").innerHTML = junCaption[juni];
  document.getElementById("index-jun-project-desc").innerHTML = junProjectDesc[juni];
  
  document.getElementById("index-soph-project-title").innerHTML = sophProjectTitle[sophi];
  document.getElementById("index-soph-student-name").innerHTML = sophStudentName[sophi];
  document.getElementById("index-soph-picture").src = sophPicture[sophi];
  document.getElementById("index-soph-source-caption").innerHTML = sophCaption[sophi];
  document.getElementById("index-soph-project-desc").innerHTML = sophProjectDesc[sophi];
}
