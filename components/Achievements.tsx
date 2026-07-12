export default function Achievements() {
  const achievements = [
    {
      icon: "🥇",
      title: "1st Place - Ideathon",
      description:
        "Secured 1st place by presenting an innovative agriculture-based solution that demonstrated creativity, technical knowledge, and problem-solving skills.",
    },
    {
      icon: "🏅",
      title: "4th Place - Hackathon",
      description:
        "Achieved 4th place in the Hackathon conducted at PES College by collaborating with a team to develop a technology-driven solution within a limited time.",
    },
    {
      icon: "♟️",
      title: "State-Level Chess Player",
      description:
        "Represented in multiple state-level chess tournaments, strengthening strategic thinking, decision-making, and analytical skills.",
    },
    {
      icon: "🏆",
      title: "7th Rank - State Chess Tournament",
      description:
        "Secured 7th rank in the State-Level Chess Tournament (2017–2018), showcasing consistency and competitive excellence.",
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