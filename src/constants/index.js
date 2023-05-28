import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  travely,
  neighbourly,
  dicegame,
  guessthenumber,
  neighbourlyweb,
  wildlife,
  sliit,
  richmond,
  unawatuna,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "about",
    title: "CV",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Kotlin Developer",
    icon: web,
  },
  {
    title: "Content Writer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },

  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const education = [
  {
    name: "Bachelor's degree",
    institute: "SriLanka Institute of Information Technology",
    icon: sliit,
    iconBg: "#383E56",
    year: "2021 - present",
    description:
      "Currently reading for my Bachelors' Degree in Software Engineering (Bsc.(Hons) Information Technology Specialization in Software Engineering) at SriLanka Institute of Information Technology (SLIIT) - 3.6 CGPA",
  },
  {
    name: "Advanced Level",
    institute: "Richmond College",
    icon: richmond,
    iconBg: "#383E56",
    year: "2015 - 2018",
    description:
      "Passed General Certificate Advanced Level Exam in Biology stream with 2 B (Biology, Chemistry) and 1 C (Physics) Passes  ",
  },
  {
    name: "Ordinary Level",
    institute: "Unawatuna M.V",
    icon: unawatuna,
    iconBg: "#383E56",
    year: "2009 - 2014",
    description:
      "Passed General Certificate Ordinary Level Exam with 9 A passes",
  },
];

const projects = [
  {
    name: "Travely",
    description:
      "This is SLIIT 2nd year 2nd semester ITP project. Travely is a travel and tourism website with vehicle booking, hotel booking, special activity and also can book restaruants",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node",
        color: "blue-text-gradient",
      },

      {
        name: "mongodb",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "rest-api",
        color: "green-text-gradient",
      },
    ],
    image: travely,
    source_code_link: "https://github.com/ChillBroh/Travely.git",
  },
  {
    name: "Neighbourly",
    description:
      "MAD project using Kotlin in Android studio (Neighbourly - App for solution ideas for Economic crisis) for SLIIT 2nd year 2nd semester project",
    tags: [
      {
        name: "kotlin",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "Android Studio",
        color: "pink-text-gradient",
      },
    ],
    image: neighbourly,
    source_code_link:
      "https://github.com/ChillBroh/MAD_Project_Neighbourly.git",
  },
  {
    name: "Neighbourly (Web)",
    description:
      "Neighbourly is a web and mobile application created to address the economic crisis, food wastage, and poverty in rural Sri Lanka. The platform facilitates the sharing of surplus food and resources between individuals, businesses, and organizations. Users can list excess food items, connect with those in need, and contribute non-food items. Neighbourly aims to foster community collaboration, reduce food wastage, and uplift rural communities through technology and shared responsibility.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "wordpress",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: neighbourlyweb,
    source_code_link: "https://github.com/ChillBroh/Neighbourly-Website.git",
  },
  {
    name: "Dice Game",
    description:
      "Two players can simultaneously play this game. Player 1 must initially press the button to roll the dice. If player 1 gets 1, the current player will switch to player 2, otherwise, player 1 can carry on and his score will be added to player 1's overall score. The winner of the game is the player who scores 100 points first",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: dicegame,
    source_code_link: "https://github.com/ChillBroh/Roll-The-Dice-Game-.git",
  },
  {
    name: "Guess The Number",
    description:
      "In this game a player must Enter a number between 1-20. When the player hits enter computer will generate a random number and will check with the enterend number. If both numbers are matching player wins otherwise player gets another chance.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "pink-text-gradient",
      },
    ],
    image: guessthenumber,
    source_code_link: "https://github.com/ChillBroh/Roll-The-Dice-Game-.git",
  },
  {
    name: "Wild Life Trip Safari Management System ",
    description:
      "This is SLIIT 1st Year 2nd semester IWT project. Wildlife Quest SL Management system is one of the best and easy websites where you can plan your holiday Safari trip with many benefits under fair Packages. When a person who is fond of this system enters the web application, they can find out packages, Donations, Register, promotions, camping sites and availabilities. If a customer wants to do Reservation, they will have to get register to the web application. Both local and foreign customers can get register to the system, then a user account is created. These user accounts are managed by the system admin. Both Registered as well as non-registered customers can Donate Fund for the wildlife maintenance and Expenses by Selecting a suitable amount without login the system",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: wildlife,
    source_code_link:
      "https://github.com/ChillBroh/WILD-LIFE-TRIP-SAFARI_MANAGEMENT-SYSTEM.git",
  },
];
neighbourlyweb;
export { services, technologies, education, projects };
