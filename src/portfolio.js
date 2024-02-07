/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, 
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Santoshi Dinesh",
  title: "Hi all, I'm Santo",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
  "https://docs.google.com/document/d/1PVavOpMN8xzghKmpjVJjZrtFNCcCmA3x/edit?usp=drive_link&ouid=105869833399726990082&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Santodinnu",
  linkedin: "https://www.linkedin.com/in/santoshi-dinesh/",
  gmail: "santoshi@gmail.com",
  facebook: "https://www.facebook.com/shantoshi",
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Manage backend databases using MongoDb"),
    emoji(
      "⚡ Integration of third party API services"
    )
  ],

  

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    
  ],
  display: true 
};

// Education Section

const educationInfo = {
  display: true, 
  schools: [
    {
      schoolName: "Per Scholas",
      logo: require("./assets/images/Per-Scholas.png"),
      subHeader: "Software Engineer Training Course",
      duration: "October 2023 - February 2024",
      descBullets: [
        "Completed Software Engineer Training course with hands-on experience"
      ]
    },
    {
      schoolName: "Easwari Engineering College",
      logo: require("./assets/images/Easwarilogo.png"),
      subHeader: "Bachelor of Engineering in ELectronics and Communication",
      duration: "September 2005 - April 2009",
      descBullets: [
        "Completed bachelors of enginnering in Electronics and Communication"
      ]
    },
    
  ]
};

// top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "90%" 
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false 
};



const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some Peronal projects",
  projects: [
    {
      image: require("./assets/images/MinecraftGame.png"),
      projectName: "Memory Game",
      projectDesc: "A game designed totally using Html, Css and Javascript",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://santodinnu.github.io/mod1GameProject/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Let'sCook.png"),
      projectName: "Let's Cook",
      projectDesc: "A React application to generate reciepes",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://letscookmod2project.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/previewSynth.png"),
      projectName: "SynthInscribe Pro",
      projectDesc: "A MERN Stack application using API",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://mod3frontend.onrender.com/"
        }
      ]
    }
  ],
  display: true 
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "santoshi@gmail.com"
};



const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  
  openSource,
  bigProjects,
  
  contactInfo,
  
  isHireable
};
