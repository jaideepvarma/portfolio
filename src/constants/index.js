import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
; // replace with actual path and file name



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


export const EXPERIENCE = [
  {
    year: "June 2025 - August 2025",
    role: "IIoT Intern",
    company: "DIZIAutomation",
    description: "Designed and implemented real-time data flow systems for industrial automation using Node-RED, MQTT, and Modbus protocols. Built interactive dashboards to visualize live sensor data, supporting performance monitoring and anomaly detection.",
    technologies: ["Node-RED", "MQTT", "Modbus"],
    
  },
  {
    year: "June 2025 - July 2025",
    role: "Full Stack Developer Intern",
    company: "Laneway India",
    description: "Built a travel recommendation platform with a personalized AI-based itinerary planner and an integrated RAG chatbot for location-aware trip planning. Developed a user interface that streamlined work and boosted efficiency by 50%.",
    technologies: ["React.js", "Node.js", "Express.js"],
   
  }
];



export const PROJECTS = [
  {
    title: "IoT-Based Inventory Alert System",
    image: project1,
    description: `Engineered an IoT-based system to monitor inventory levels and send automated low-stock alerts using ESP-based microcontrollers. Reduced stockouts by 60% through real-time alerts via SMTP and ESPMailClient. Enabled 24/7 monitoring using ESP32/ESP8266 with ultrasonic sensors and Wi-Fi. Achieved sub-2s refresh latency with optimized sensor logic in C (Arduino IDE).`,
    technologies: ["ESP32/ESP8266", "C (Arduino IDE)", "Ultrasonic Sensors", "Wi-Fi", "SMTP", "ESPMailClient"]
  },
  {
    title: "Handy Connect",
    image: project2,
    description: `Developed a home services booking platform connecting users with verified professionals for plumbing and electrical repairs. Enhanced user experience with 50% faster bookings using React.js frontend and optimized Node.js Express.js backend. Implemented secure JWT-based authentication and scalable MongoDB data storage. Modularized backend APIs to improve maintainability and reduce service overhead by 40%.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"]
  },
  {
    title: "AI-Powered Automated Document Processing System",
    image: project3,
    description: `Built an AI-driven system for automated document classification, semantic search, and metadata extraction. Automated 90% of manual processing using SpaCy, RoBERTa, Qwen OCR, Textract, and Tesseract. Achieved 95% semantic search accuracy with SBERT and FAISS indexing.`,
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT","Textract", "SBERT"]
  }
];


export const CONTACT = {
  address: "7A,s1, Hansa Abhinav Apartments ,Tiruvottriyur,Chennai-600019 ",
  phoneNo: "9345944936 ",
  email: "jaideepvarma75@gmail.com",
};
