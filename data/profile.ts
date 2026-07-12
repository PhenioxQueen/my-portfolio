// Edit this file to customize your portfolio content.

export interface ContactInfo {
  email?: string;
  phone?: string;
  linkedin?: string;
  github?: string;
}

export interface Profile {
  name: string;
  photo: string;
  role: string;
  apprenticeId: string;
  shortBio: string;
  forgeCohort: string;
  skills: string[];
  contact: ContactInfo;
}

const profile: Profile = {
  name: "Abhiram Adarsh Bhat",
  photo: "/Abhiram.png",
  role: "Embedded & IoT Intern | Information Science & Engineering Student",
  apprenticeId: "ZPN-NAG-001",

  shortBio:
    "Passionate about building innovative solutions using Embedded Systems, IoT, and Full-Stack technologies. " +
    "I enjoy transforming ideas into real-world applications through software and hardware integration. " +
    "Currently, I'm expanding my expertise in web development, cloud computing, and intelligent IoT systems while continuously learning modern technologies and best development practices.",

  forgeCohort: "April 2026",

  skills: [
    "C",
    "Python",
    "Java",
    "SQL",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Git",
    "AWS",
    "Embedded Systems",
    "IoT"
  ],

  contact: {
    email: "1nc23is001abhiram@gmail.com",
    phone: "+91 8277248404",
    linkedin: "https://www.linkedin.com/in/abhiram-adarsh-bhat-544489300",
    github: "https://github.com/Abhiram-Bhat-18",
  },
};

export default profile;