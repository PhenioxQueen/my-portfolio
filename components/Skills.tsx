export default function Skills() {
  const skillCategories = [
    {
      title: "💻 Programming",
      skills: ["C", "Java", "Python"],
    },
    {
      title: "🌐 Web Development",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
      ],
    },
    {
      title: "☁️ Cloud Computing",
      skills: [
        "AWS",
        "google cloud",
      ],
    },
   
    {
      title: "🛠 Tools & Platforms",
      skills: [
        "Git",
        "GitHub",
        "Kiro",
        "Django",
        "VS Code",
        "Arduino IDE",
      ],
    },
    {
      title: "🤝 Soft Skills",
      skills: [
        "Problem Solving",
        "Teamwork",
        "Leadership",
        "Communication",
        "Critical Thinking",
      ],
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">
        💻 Technical Skills
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {skillCategories.map((category) => (
          <div
            key={category.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <h3 className="mb-6 text-2xl font-bold text-blue-700">
              {category.title}
            </h3>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
