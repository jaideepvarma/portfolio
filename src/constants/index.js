import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `
 A passionate software developer with hands-on experience in Java for building robust software solutions and solving complex algorithms through data structures and algorithms (DSA). I specialize in web development using React for dynamic user interfaces and Node.js for scalable backend solutions. Additionally, I have a strong understanding of the Internet of Things (IoT), integrating smart devices to create seamless experiences. My expertise spans building full-stack applications that are both user-friendly and highly functional, optimizing user experiences with modern technologies`;

export const ABOUT_TEXT = `I developed a strong foundation in computer science early on and am currently pursuing my 3rd year in BTech in Computer Science and Engineering (IoT) at Shiv Nadar University. Throughout my journey, I’ve honed my skills in web development, working with cutting-edge technologies like React for front-end development, Node.js for building powerful backends, and IoT systems for smart device integration. I am continuously exploring new technologies to enhance my skill set and deliver innovative solutions`;

export const EDUCATION = [
  {
    year: "2022 - Present",
    role: "BTech in Computer Science and Engineering (IoT)",
    university: "Shiv Nadar University",
    description: `Currently pursuing a Bachelor's degree in Computer Science and Engineering with a focus on IoT at Shiv Nadar University. Engaged in advanced coursework and hands-on projects related to full-stack development, Internet of Things (IoT), and smart home technologies.`,
    technologies: ["Java", "JavaScript", "React", "Node.js", "IoT"],
   
  },
  {
    year: "2020 - 2022",
    role: "Junior College (12th Grade)",
    university: "Srichaitanya Academy Junior College",
    description: `Completed my higher secondary education with a focus on Mathematics, Physics, and Computer Science. Gained a strong foundation in theoretical and practical aspects of Computer Science.`,
    technologies: ["Mathematics", "Physics", "Chemistry"],
   
  },
  
  {
    year: "2010 - 2020",
    role: "Schooling (1st to 10th Grade)",
    university: "Thiru Thangal Nadar Vidhyalaya",
    description: `Completed schooling from 1st to 10th grade, where I developed a foundational understanding of various subjects, including basic computer programming, mathematics, and science.`,
    technologies: ["Basic Programming", "Mathematics", "Science"],
   
  },
];



export const PROJECTS = [
  {
    title: "IOT based inventory management",
    image: project1,
    description:
    `The IoT-Based Inventory Alert System is designed to monitor the stock levels of consumables like ice cream and
    chocolate. Using ultrasonic sensors connected to ESP32/ESP8266 microcontrollers, the system tracks inventory
    in real-time and sends automated low-stock alerts. The data is processed and transmitted via Wi-Fi, ensuring
    seamless communication. When stock levels drop below a predefined threshold, email notifications are sent
    using the SMTP Protocol through the ESPMailClient library, ensuring timely replenishment and minimizing stock
    outages`,
    technologies: [ "ESP32/ESP8266, C++ (Arduino IDE) Ultrasonic Sensors, Wi-Fi, SMTP Protocol,ESPMailClient Library."],
  },
  {
    title: "Handy Connect",
    image: project2,
    description:
      `HandyConnect is a platform that connects users with skilled professionals for home utility services 
    such as plumbing, electrical work, and carpentry. The platform provides a user-friendly interface built with React.js, 
    enabling users to easily browse and book services. The backend, developed with Node.js and Express.js, ensures secure 
    user authentication using JWT and efficient service management. A scalable database built with MongoDB is used to manage 
    user profiles, service data, and booking information. Additionally, secure payment processing is implemented using 
    Stripe API, offering a seamless and trustworthy experience for users.`,
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Stripe API"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: [ "Tailwind CSS", "React", "javascript"],
  },
 
];

export const CONTACT = {
  address: "7A,s1, Hansa Abhinav Apartments ,Tiruvottriyur,Chennai-600019 ",
  phoneNo: "9345944936 ",
  email: "jaideepvarma75@gmail.com",
};
