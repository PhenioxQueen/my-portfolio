export default function Projects() {
  const projects = [
    {
      title: "Krishi Vaani",
      subtitle: "Acoustic Pest Detection & Early Warning System (Ongoing)",
      image: "/projects/KrishiVaani.png",
      description:
        "Developing a smart agriculture solution that detects hidden crop pests using MEMS microphones, ESP32-S3, and LoRa communication. The system provides real-time farmer notifications while supporting sustainable farming through early pest detection.",
      tech: [
        "ESP32-S3",
        "LoRa",
        "MEMS Microphone",
        "IoT",export default function Projects() {
  const projects = [
    {
      title: "AI-Based Student Skill Gap Analyzer and Guider",
      subtitle: "ML-Powered Career Guidance Platform",
      image: "/projects/ai based skill gap analyser.png",
      description:
        "Developed an intelligent web application to evaluate student academic metrics, pinpoint target skill deficiencies, and suggest personalized career pathways. Engineered custom clustering algorithms using Scikit-Learn to categorize student performance profiles, driving automated, actionable learning recommendations. Built a responsive front-end dashboard with React, communicating seamlessly via a Flask-backed RESTful API.",
      tech: [
        "Python",
        "Scikit-Learn",
        "Flask",
        "React",
        "MySQL",
      ],
    },
    {
      title: "Crime Prediction and Pre-Action Mechanism",
      subtitle: "Predictive Analytics for Public Safety",
      image: "/projects/cyber crime.png",
      description:
        "Designed a predictive analytics pipeline to analyze historical municipal records and model high-risk regional crime hotspots. Implemented deep learning and classification frameworks to project pattern shifts, triggering automated warning mechanisms for preemptive community actions. Optimized data preprocessing pipelines and structured relational databases using SQL to achieve sub-second query performance during high-throughput analysis.",
      tech: [
        "Python",
        "TensorFlow",
        "Machine Learning",
        "SQL",
      ],
    },
    {
      title: "Metro Station Passenger Control and Safety System",
      subtitle: "Real-Time Crowd Management Simulation",
      image: "/projects/Metro.png",
      description:
        "Simulated a real-time, high-throughput passenger management system utilizing robust core data structures (Queues, Graphs) to dynamically throttle station congestion. Applied advanced graph search and pathfinding algorithmic paradigms to determine optimal, safe egress paths during high-occupancy peak transit anomalies.",
      tech: [
        "Java",
        "Data Structures & Algorithms",
        "OOP",
      ],
    },
    {
      title: "IoT-Based Smart Food Dispenser System for Animals",
      subtitle: "Automated Animal Feeding & Monitoring System",
      image: "/projects/animal food monitor.png",
      description:
        "Architected an automated IoT hardware-software prototype capable of tracking real-time weight schedules and dispensing precise food components. Integrated lightweight webhook alerts to stream real-time dispensing status logs directly to a cloud-hosted web tracking interface.",
      tech: [
        "Embedded Systems",
        "Python",
        "Flask",
        "Cloud Integration",
      ],
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">
        🚀 Featured Projects
      </h2>
      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid md:grid-cols-2">
              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-cover"
              />
              <div className="p-8">
                <h3 className="text-3xl font-bold text-blue-700">
                  {project.title}
                </h3>
                <p className="mt-2 font-semibold text-gray-500">
                  {project.subtitle}
                </p>
                <p className="mt-6 leading-8 text-gray-700">
                  {project.description}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
        "Solar Power",
      ],
    },

    {
      title: "Smart Livestock Scanner",
      subtitle: "IoT-Based Animal Monitoring System",
      image: "/projects/SmartLiveStockScanner.png",
      description:
        "Designed an IoT-based livestock monitoring system to collect body parameters using sensors for better animal management, health monitoring, and early disease detection.",
      tech: [
        "ESP32",
        "IoT",
        "Sensors",
      ],
    },

    {
      title: "IoT-Based ECG Monitoring System",
      subtitle: "Healthcare IoT Project",
      image: "/projects/ECG.png",
      description:
        "Developed a real-time ECG monitoring system using ESP32 and OLED display with abnormal heart-rate alert functionality for continuous health monitoring.",
      tech: [
        "ESP32",
        "Arduino",
        "OLED",
        "ECG Sensor",
        "IoT",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">
        🚀 Featured Projects
      </h2>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="grid md:grid-cols-2">

              <img
                src={project.image}
                alt={project.title}
                className="h-80 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-bold text-blue-700">
                  {project.title}
                </h3>

                <p className="mt-2 font-semibold text-gray-500">
                  {project.subtitle}
                </p>

                <p className="mt-6 leading-8 text-gray-700">
                  {project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
