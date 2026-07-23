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
  name: "Haripriya N R",
  photo: "/Haripriya.png",
  role: "AI/ML & Cloud Enthusiast | Information Science & Engineering Student",
  apprenticeId: "ZPN-NAG-003",
  shortBio:
    "Passionate about building intelligent solutions using Machine Learning, Generative AI, and Cloud technologies. " +
    "I enjoy transforming data and ideas into real-world applications through full-stack development and smart system design. " +
    "Currently, I'm expanding my expertise in cloud platforms, LLMs, and scalable web applications while continuously learning modern development practices.",
  forgeCohort: "April 2026",
  skills: [
    "C",
    "Java",
    "JavaScript",
    "Python",
    "SQL",
    "React",
    "Flask",
    "Django",
    "AWS",
    "Google Cloud Platform",
    "MySQL"
  ],
  contact: {
    email: "haripriyarajshekar@gmail.com",
    phone: "+91 6360183971",
    linkedin: "https://www.linkedin.com/in/haripriya-nr-4640382b7",
    github: "https://github.com/PhenioxQueen",
  },
};
export default profile;
