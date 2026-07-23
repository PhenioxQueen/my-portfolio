export default function Achievements() {
  const achievements = [
    {
      icon: "🏆",
      title: "Project Exhibition",
      description:
        "Earned the 2nd prize for developing a creative,innovative project in college level competation at NCET, demonstrating strong problem-solving skills.",
    },
      icon: "🏆",
      title: "AWS Hackathon Innovation Badge",
      description:
        "Earned the AWS Hackathon Innovation Badge for developing a creative, cloud-based solution as part of the AWS Academy program, demonstrating strong problem-solving and cloud engineering skills.",
    },
    {
      icon: "🎓",
      title: "Elite Silver Medalist - HCI (NPTEL)",
      description:
        "Achieved Elite Silver Medal certification in Human-Computer Interaction through NPTEL, reflecting strong academic performance and deep understanding of user-centered design principles.",
    },
    {
      icon: "♟️",
      title: "District-Level Chess Tournament - 2nd Prize",
      description:
        "Secured 2nd Prize in a District-Level Chess Tournament, showcasing strong strategic thinking, focus, and competitive spirit.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">
        🏆 Achievements
      </h2>
      <div className="grid gap-8 md:grid-cols-2">
        {achievements.map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="text-5xl">{item.icon}</div>
            <h3 className="mt-4 text-2xl font-bold text-blue-700">
              {item.title}
            </h3>
            <p className="mt-4 leading-7 text-gray-700">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
