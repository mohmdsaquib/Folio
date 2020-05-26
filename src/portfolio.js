
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Mohd Saquib",
  title: "Hi all, I'm Saquib",
  subTitle: emoji("Engineer| Applied Data Science Enthusiast|Blogger|Youtuber"),
  subTitle:emoji("I use my adaptive problem-solving skill,to boost those Artificial Brains in helping me to solve real-life problems. If you are HIRING, let's connect. I would love to contribute my part in the success of your organization."), 
  resumeLink: "https://drive.google.com/open?id=1ugqM4O4ZkbBeSIVzEVcrtis42g6JxL4D",
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/mohmdsaquib",
  linkedin: "https://www.linkedin.com/in/saquib98/",
  gmail: "mohdsaquib0998@gmail.com",
  medium: "https://medium.com/@mohdsaquib0998",
  Youtube: "https://www.youtube.com/Datumphile"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "Learning| Applying | Improving",
  skills: [
    emoji("⚡ Working with Machine Learning Algorithms (Linear & Logistic Regression, KNNs, SVMs, Decision Tree, Random Forest, XGBoost"),
    emoji("⚡ Working with ARIMA and LSTMs for time series forecasting"),
    emoji("⚡ Working with Libraries like Scikit-learn, Pandas, Numpy, Keras, OpenCV, and Tensorflow"),
    emoji("⚡ Building Models for Computer Vision, Natural Language Processing[NLP]"),
    emoji("⚡ Using Convolutional Neural Networks(CNN) for Image Processing"),
    emoji("⚡ Experimenting with Feature Engineering Techniques")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName:"Github",
      fontAwesomeClassname:"fab fa-github"
    },
    
      skillName: "Kaggle",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Analysis",
      fontAwesomeClassname: "fas fa-chart-bar"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },

    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }

  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Analytics",
      progressPercentage: "70%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
    },
    {
      Stack: "Deep Learning",
      progressPercentage:"60%"
    }    
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science Intern",  
      company: "Datum Guy",
      companylogo:  require("https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.facebook.com%2FTheDatumGuy%2F&psig=AOvVaw0iL2BUeTBxA_AS1qP4t_0b&ust=1590528714182000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPjB6av7z-kCFQAAAAAdAAAAABAD"),
      date: "May 2019 – July 2019",
      desc: "Boosting Marketing Strategies, Analyzing Customer behaviour using Data Science Techniques and Content Creation in form of interactive blogs"
    },
    {
      role: "Industrial Training",   
      company: "Noida Metro Rail Corporation",
      companylogo: "https://www.referralcandy.com/wp-content/uploads/2017/06/quora-featured-image-2-740x740.png",
      date: "May 2019 – June 2019",
      desc: "Metro rail signaling and train control using CBTC/Communication Based Train Control System"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "YjMyZDY3YmQ3OGYyNDRlZDczNGZjN2QxZGE3ODQ0ZGVmNTdlYmUxYQ==",
  githubUserName: "github.com/mohmdsaquib",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing" },
        { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [{ name: "View Google Assistant Action", url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en" }]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/the-wisdom-1-0/self-driving-car-using-cnn-8c13c2b4c81e",
      title: "Self Driving Car Using CNN",
      description: "The implementation of Nvidia paper using Deep Learning model Convolutional Neural Network, using TensorFlow implementation."
    },
    {
      url: "https://medium.com/the-wisdom-1-0/cancer-diagnosis-using-machine-learning-3502b1e41770",
      title: "Cancer Diagnosis Using Machine Learning",
      description: "The diagnosis of cancer using different Machine leaning models- KNN, SVM, Logistic Regression and comparison of each model using Log-loss, Confusion Matrix and Accuracy as a metric."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "Youtube",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A YOUTUBER BADGE 😅"),

  talks: [
    {
      title: "Expoloratory Data Analysis on Iris Data Set",
      subtitle: "Explained basic EDA techniques on Iris Data Set",
      event_url: "https://www.youtube.com/watch?v=DpEQVsUpBb4&t=78s",
      image:
        "https://www.google.com/url?sa=i&url=http%3A%2F%2Fscikit-learn.org%2Fstable%2Fauto_examples%2Fdatasets%2Fplot_iris_dataset.html&psig=AOvVaw1fj1eBQH6UiRq518PzmsaR&ust=1590530898425000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMCskb6D0OkCFQAAAAAdAAAAABAD"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Looking forward to connect with me? My Inbox is open for all.",
  number: "+917985773267",
  email_address: "mohdsaquib0998@gmail.com"
};


export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo};
