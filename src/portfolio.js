/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Shreya Chaudhary",
  title: "Hi all, I'm Shreya",
  subTitle: emoji(
    "Software Engineer who brings ideas to life through full stack development, system design and strong coding fundamentals."
  ),
  resumeLink:
    "https://drive.google.com/file/d/16D3M2WwxW3iF3uIWEDlrZZ2Qg5fZoR0U/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Shreyachaudhary1112",
  linkedin: "https://www.linkedin.com/in/shreya-chaudhary1101",
  gmail: "shreyuchaudhary@gmail.com",
  gitlab: "https://gitlab.com/shreyac1112",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Tools, languages and frameworks that power my development",
  skills: [
    emoji("Programming: C++, Python, JavaScript, TypeScript, SQL, Solidity"),
    emoji(
      "Core Technical Skills: Data Structures, Algorithms, REST APIs, Cloud Computing, Object-Oriented Programming, System Design,  Debugging & Testing "
    ),
    emoji("Frameworks: React.js, Node.js, Express.js, Flutter"),
    emoji(
      "Platforms & Tools: Docker, Git, MySQL, Android Studio, AWS, Postman "
    ),
    emoji(
      "Engineering Practices: Microservices, System Architecture, Version Control, Agile Delivery, Design Patterns"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Illinois Urbana-Champaign,",
      logo: require("./assets/images/uiuc.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "August 2023 - December 2024"
    },
    {
      schoolName: "Pune Institute Of Computer Technology",
      logo: require("./assets/images/pict.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2019 - May 2023"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Fullstack MERN", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    },
    {
      Stack: "Data Analysis",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "Saayam For All",
      companylogo: require("./assets/images/saayamlogo.png"),
      date: "March 2025 – Current",
      desc: "",
      descBullets: [
        "Improved front-end responsiveness by optimizing React UI workflows and restructuring rendering cycles, resulting in smoother and 25% faster interactions.",
        "Enhanced platform reliability by engineering efficient Java/Python API communication layers and integrating structured API  orchestration, reducing latency and improving data consistency.",
        "Increased system maintainability by refining modular components and strengthening state-management logic, leading to cleaner architecture and easier feature scalability."
      ]
    },
    {
      role: "Blockchain Intern ",
      company: "Atomic Loops",
      companylogo: require("./assets/images/atomiclogo.png"),
      date: " Jan 2022 – Mar 2022",
      descBullets: [
        "Developed 15+ Solidity smart contracts using Truffle, Hardhat, Brownie, and Remix to support decentralized application  prototyping and rapid feature testing.",
        "Improved contract reliability by performing vulnerability checks (reentrancy, overflow, access control) and writing unit tests for consistent and safe behavior.",
        "Optimized contract logic by refining storage layouts and loop structures, reducing gas usage in test deployments, and improving execution efficiency."
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Sarvatra E-Labs Technologies",
      companylogo: require("./assets/images/sarvatra.png"),
      date: "Dec 2021 – Mar 2022",
      descBullets: [
        "Converted internal Java programs into optimized native binaries using GraalVM, improving startup performance and enabling seamless cross-platform execution.",
        "Collaborated with teams across Linux, Windows, and macOS to validate native-image builds and resolve inconsistencies,  ensuring stable behavior for secure-payment prototypes.",
        "Built small utilities using Java and scripting to streamline local testing workflows, reducing repetitive manual setup and improving developer efficiency."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some projects I have worked on

const bigProjects = {
  title: "Projects",
  subtitle:
    "Work that reflects my love for coding, creating and turning ideas into functional software.",
  projects: [
    {
      image: require("./assets/images/prismLogo.png"),
      projectName: "Prism | MERN Stack",
      projectDesc:
        "A real time collaborative coding platform with multi user editing, fast rendering and event driven sync for smooth teamwork.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://prism-client-v2-07c7a0.gitlab.io/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/bhpLogo.png"),
      projectName: "Bangalore Housing Price Predictor | Flask",
      projectDesc:
        "A full stack ML app that predicts property prices using a Flask REST backend, clean preprocessing and a simple interactive UI.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://bhprediction.netlify.app/"
        }
      ]
    },
    {
      image: require("./assets/images/BugLogo.png"),
      projectName: "Real-World Bug Analysis Suite | Testing & Automation",
      projectDesc:
        "An automation toolkit that increases fault coverage and reduces debugging time using smart test generation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ShreyaChaudhary1211/CS527-Project"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  achievementsCards: [
    {
      title: "Girlscript Front End Development",
      image: require("./assets/images/yaylogo.png"),
      imageAlt: "Girlscript Logo",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1XMoylJQIVNDrmSUB4_lXUlxzRSr2QhZI/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Girlscript Full Stack Development",
      image: require("./assets/images/yaylogo.png"),
      imageAlt: "Girlscript Logo",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1Vhlts_ONt0XG6_Wj-ZWMVsGgoJkH5Cu5/view?usp=drive_link"
        }
      ]
    },

    {
      title: "Girlscript AI and Chatbots",
      image: require("./assets/images/yaylogo.png"),
      imageAlt: "Girlscript Logo",
      footerLink: [
        {
          name: "View",
          url: "https://drive.google.com/file/d/1lOgHf7R8CiBSldyOx7O2HEx_o-2eSAs_/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 217-954-3340",
  email_address: "shreyuchaudhary@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
